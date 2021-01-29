require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();

const authCtrl = require('./authController');
const postCtrl = require('./postController');

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }, //one year
  })
);

//auth endpoints
app.post(`/api/auth/register`, authCtrl.register);
app.post(`/api/auth/login`, authCtrl.login);
app.get('/api/auth/getUser', authCtrl.getUser);
app.post('/api/auth/logout', authCtrl.logout);

//post endpoints
app.get(`/api/posts/:userid`, postCtrl.getPosts);
app.get(`/api/post/:postid`, postCtrl.getSinglePost);
app.post(`/api/post/:userid`, postCtrl.newPost);
app.delete(`/api/post/delete/:postid`, postCtrl.deletePost);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((dbInstance) => {
  app.set('db', dbInstance);
  console.log('DB ready!');
  app.listen(SERVER_PORT, () =>
    console.log(`Server ready on port ${SERVER_PORT}`)
  );
});
