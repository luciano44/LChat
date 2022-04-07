import "./style.scss";
import UserOnline from "../UserOnline";

function Aside() {
  return (
    <aside className="aside">
      <header>
        <span>Online</span>
        <span>6</span>
      </header>
      <ul className="aside__users-online">
        <UserOnline name="bob11" />
        <UserOnline name="miky" />
        <UserOnline name="@whydoesmynamegottabysobig" />
        <UserOnline name="21_miky" />
        <UserOnline name="the biggest name in the entire world" />
        <UserOnline name="Bob32!!_" />
      </ul>
    </aside>
  );
}

export default Aside;
