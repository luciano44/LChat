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

type Props = { loggedIn: boolean };

function SideMenu({ loggedIn }: Props) {
  const { pathname } = useLocation();

  return (
    <div className="side-menu-wrapper">
      <div className="side-menu">
        <ul>
          <li>
            <Link to="/chat">
              {pathname !== "/chat" ? <BsChatRight /> : <BsChatRightFill />}
            </Link>
          </li>
          {loggedIn && (
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
      <SignInSignOut loggedIn={false} />
    </div>
  );
}

export default SideMenu;
