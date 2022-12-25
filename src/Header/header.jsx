// import React from "react";
import { useState, useEffect } from "react";
import "./header.css";
import "../index.css";
import { LoginBtn } from "../Buttons/buttons";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";

const Header = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  return (
    <header className="fixed w-full top-0 left-0 z-50 flex bg-white">
      <div className="relative flex items-center justify-between top-0 pt-0 px-5 my-0 mx-auto w-full">
        <div className="flex items-center">
          <a
            className="logo text-base font-medium whitespace-nowrap text-black-3"
            href="/"
          >
            <img
              className="max-w-full align-middle stroke-2"
              src={logo2}
              alt=""
            />
          </a>
        </div>
        <div>
          {activeBtn ? (
            <LoginBtn name="Log In" url="/login" />
          ) : (
            <LoginBtn
              name="Log In"
              url="#"
              title="🚫 Not Available now"
              // color="#f1f1f1"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
