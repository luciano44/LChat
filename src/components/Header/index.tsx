import "./style.scss";
import logo from "./../../img/logos/normal-size-logos/logo-with-text.svg";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function Header({ children }: Props) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="#">
          <Link to="/chat">
            <img src={logo} alt="Logo" className="header__logo" />
          </Link>
        </a>
        {children}
      </div>
    </header>
  );
}

export default Header;
