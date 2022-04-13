import "./style.scss";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

type Name = { name: string };

function UserOnline({ name }: Name) {
  return (
    <Link to={`perfil/${name}`}>
      <li title={name} className="aside__user">
        <span>
          <BiUser />
        </span>
        <span>{name}</span>
      </li>
    </Link>
  );
}

export default UserOnline;
