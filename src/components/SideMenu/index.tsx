import "./style.scss";
import {
  BsChatRight,
  BsChatRightFill,
  BsPerson,
  BsPersonFill,
  BsPeople,
  BsPeopleFill,
} from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";
import SignInSignOut from "../SignInSignOut";
import { useContext } from "react";
import { usersContext } from "../../context/Context";

function SideMenu() {
  const { pathname } = useLocation();
  const context = useContext(usersContext);
  const jwt = context?.jwt;

  return (
    <div className="side-menu-wrapper">
      <div className="side-menu">
        <ul>
          <li>
            <Link to="/chat">
              {pathname !== "/chat" ? <BsChatRight /> : <BsChatRightFill />}
            </Link>
          </li>
          {jwt && (
            <li>
              <Link to="/perfil">
                {pathname !== "/perfil" ? <BsPerson /> : <BsPersonFill />}
              </Link>
            </li>
          )}
          <li>
            <Link to="/usuarios">
              {pathname !== "/usuarios" ? <BsPeople /> : <BsPeopleFill />}
            </Link>
          </li>
        </ul>
      </div>
      <SignInSignOut />
    </div>
  );
}

export default SideMenu;
