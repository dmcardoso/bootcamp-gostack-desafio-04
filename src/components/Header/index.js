import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

// import { Container } from './styles';

export default function Header() {
  return (
    <header>
      <img src={logo} className="logo" />
      <div className="profile">Meu perfil</div>
    </header>
  );
}
