import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import { connect } from 'react-redux';
import './Dashboard.css';
import DashboardMap from './DashboardMap';
import { withRouter } from 'react-router-dom';

const Dashboard = (props) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [userPosts, setUserPosts] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get(
        `/api/posts/${props.user.id}?search=${search}&userPosts=${userPosts}`
      )
      .then((res) => setPosts(res.data));
  };

  const deletePost = () => {
    axios
      .delete(`/api/post/delete/${props.match.params.postid}`)
      .then((res) => setPosts(res.data));
  };

  return (
    <div className="dashboard-container">
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="checkbox"
        id="myPosts"
        onChange={(e) => setUserPosts(!userPosts)}
      />
      <label>My Posts</label>
      <div className="button-container">
        <button onClick={() => getPosts()}>Search</button>
        <button>Reset</button>
      </div>

      {posts.map((e) => {
        return (
          <DashboardMap
            post={e}
            key={e.id}
            title={e.title}
            username={e.username}
            id={e.id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, withRouter)(Dashboard);
