import "./style.scss";
import {
  BsChatRight,
  BsChatRightFill,
  BsPerson,
  BsPersonFill,
  BsPeople,
  BsPeopleFill,
} from "react-icons/bs";

function index() {
  return (
    <div className="side-menu">
      <ul>
        <li>
          <a href="#">
            <BsChatRight />
          </a>
        </li>
        <li>
          <a href="#">
            <BsChatRightFill />
          </a>
        </li>
        <li>
          <a href="#">
            <BsPerson />
          </a>
        </li>
        <li>
          <a href="#">
            <BsPersonFill />
          </a>
        </li>
        <li>
          <a href="#">
            <BsPeople />
          </a>
        </li>
        <li>
          <a href="#">
            <BsPeopleFill />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default index;
