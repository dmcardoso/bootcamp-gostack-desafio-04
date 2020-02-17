import React from "react";
import ProfilePicture from "../ProfilePicture";

import "./styles.css";
// import { Container } from './styles';

export default function Comment({ comment }) {
  const { author, content } = comment;

  return (
    <div className="comment">
      <ProfilePicture src={author.avatar} />
      <p className="content">
        <strong>{author.name}</strong> {content}
      </p>
    </div>
  );
}
