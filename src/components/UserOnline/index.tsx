import "./style.scss";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type Name = { name: string };

function UserOnline({ name }: Name) {
  return (
    <Link to={`perfil/${name}`}>
      <li title={name} className="aside__user">
        <span>
          <FaUserAlt />
        </span>
        <span>{name}</span>
      </li>
    </Link>
  );
}

export default UserOnline;
