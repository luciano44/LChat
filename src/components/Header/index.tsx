import "./style.scss";
import logo from "./../../img/logos/normal-size-logos/logo-with-text.svg";
import Links from "../Links";
import SignInSignOut from "../SignInSignOut";

function index() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="#">
          <img src={logo} alt="Logo" className="header__logo" />
        </a>
        <Links />
        <SignInSignOut />
      </div>
    </header>
  );
}

export default index;
