import "./style.scss";
import logo from "./../../img/logos/svg/logo-with-text.svg";
import openImg from "./../../img/logos/svg/open.svg";
import closeImg from "./../../img/logos/svg/close.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Links from "../Links";

type Props = {
  children: React.ReactNode;
};

function Header({ children }: Props) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function btnHandler(e?: any) {
    if (e.target.nodeName !== "DIV") {
      setIsMenuOpened((prev) => !prev);
    }
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="#">
          <Link to="/chat">
            <img src={logo} alt="Logo" className="header__logo" />
          </Link>
        </a>
        {children}
        <button onClick={btnHandler} className="header__menu-btn">
          <img
            src={isMenuOpened ? closeImg : openImg}
            alt="open/close button"
          />
        </button>
      </div>

      {isMenuOpened && (
        <div onClick={btnHandler} className="header__menu">
          <Links />
        </div>
      )}
    </header>
  );
}

export default Header;
