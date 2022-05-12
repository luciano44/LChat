import { useContext } from "react";
import UserOnline from "../UserOnline";
import { usersContext } from "../../context/Context";
import "./style.scss";

function Aside() {
  const { usersOnline } = useContext(usersContext)!;
  const usersLoggedIn = usersOnline.filter((user) => {
    if (user.name) {
      return user;
    }
  });

  return (
    <aside className="aside">
      <header>
        <span>Online</span>
        <span>{usersLoggedIn.length}</span>
      </header>
      <ul className="aside__users-online">
        {usersLoggedIn?.map(
          (user, i) => user.name && <UserOnline key={i} name={user.name} />
        )}
      </ul>
    </aside>
  );
}

export default Aside;
