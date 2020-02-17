import React from "react";
import ProfilePicture from "../ProfilePicture";
import Comment from "../Comment";

import "./styles.css";

// import { Container } from './styles';

export default function Post({ post }) {
  const { author, date, content, comments } = post;

  return (
    <div className="post">
      <div className="profile">
        <ProfilePicture src={author.avatar} />
        <div className="name-data">
          <div className="name">{author.name}</div>
          <div className="data">{date}</div>
        </div>
      </div>
      <div className="content">{content}</div>
      <div className="comments">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
