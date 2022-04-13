import { useContext } from "react";

import "./style.scss";
import UserOnline from "../UserOnline";

//context
import { usersContext } from "../../context/Context";

function Aside() {
  const ctx = useContext(usersContext);

  const usersOnline = ctx?.usersOnline;

  return (
    <aside className="aside">
      <header>
        <span>Online</span>
        <span>6</span>
      </header>
      <ul className="aside__users-online">
        {usersOnline?.map((user: any) => (
          <UserOnline name={user.name} />
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
