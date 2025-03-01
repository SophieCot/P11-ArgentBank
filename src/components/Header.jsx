
import React from "react";
import logo from "../assets/img/argentBankLogo.png"; 
import "../sass/Header.scss"; 
import Nav from "./Nav";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
     <Link to="/"> <img src={logo} alt="Logo" className="header-logo" /></Link> 
      <Nav/>
    </header>
  );
};

export default Header;
