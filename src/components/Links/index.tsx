import "./style.scss";
import { BsInfoLg } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";

function Links() {
  return (
    <ul className="header__links">
      <li>
        <a
          className="header__link"
          href="https://github.com/luciano44"
          target="_blank"
        >
          <FiGithub />
          <span>Github</span>
        </a>
      </li>
      <li>
        <a
          className="header__link"
          href="https://www.linkedin.com/in/luciano-ar/"
          target="_blank"
        >
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

export default Links;
