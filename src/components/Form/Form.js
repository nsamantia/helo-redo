import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const newPost = () => {
    axios.post(`/api/post/${props.user.id}`, { title, image, content });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <img src={image} />
      <input
        type="text"
        name="image"
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        name="content"
        placeholder="content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={() => newPost()}>Post</button>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Form);
