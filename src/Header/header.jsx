// import React from "react";
import "./header.css";
import "../index.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="/login" className="text-3xl font-bold underline">
          Log In
        </a>
      </div>
    </header>
  );
};

export default Header;
