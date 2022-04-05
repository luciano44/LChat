import "./style.scss";
import { BsInfoLg } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";

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
        <Link to="/sobre" className="header__link">
          <BsInfoLg />
          <span>Sobre</span>
        </Link>
      </li>
    </ul>
  );
}

export default index;
