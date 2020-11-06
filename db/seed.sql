CREATE TABLE users_helo(
id SERIAL PRIMARY KEY,
username varchar(50),
hash text,
profile_pic text
)

CREATE TABLE posts_helo(
id SERIAL PRIMARY KEY,
title varchar(45),
img text,
content text,
author_id integer REFERENCES users_helo(id)
);