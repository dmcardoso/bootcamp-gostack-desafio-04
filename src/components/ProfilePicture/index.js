import React from "react";
import "./styles.css";
// import { Container } from './styles';

export default function ProfilePicture({ src }) {
  return <img className="photo" src={src} />;
}
