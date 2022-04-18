import { useContext } from "react";
import UserOnline from "../UserOnline";
import { usersContext } from "../../context/Context";
import "./style.scss";

function Aside() {
  const { usersOnline } = useContext(usersContext)!;

  return (
    <aside className="aside">
      <header>
        <span>Online</span>
        <span>6</span>
      </header>
      <ul className="aside__users-online">
        {usersOnline?.map((user, i) => (
          <UserOnline key={i} name={user.name} />
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
