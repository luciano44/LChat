import "./style.scss";
import logo from "./../../img/logos/normal-size-logos/logo-with-text.svg";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function index({ children }: Props) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="#">
          <img src={logo} alt="Logo" className="header__logo" />
        </a>
        {children}
      </div>
    </header>
  );
}

export default index;
