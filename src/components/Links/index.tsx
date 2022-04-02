import "./style.scss";
import { BsInfoLg } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";

function index() {
  return (
    <ul className="header__links">
      <li>
        <a className="header__link" href="#">
          <FiGithub />
          <span>Github</span>
        </a>
      </li>
      <li>
        <a className="header__link" href="#">
          <GrLinkedinOption />
          <span>Linkedin</span>
        </a>
      </li>
      <li>
        <a className="header__link" href="#">
          <BsInfoLg />
          <span>Sobre</span>
        </a>
      </li>
    </ul>
  );
}

export default index;
