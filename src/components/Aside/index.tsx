import "./style.scss";

type Props = {
  children: React.ReactNode;
};

function index({ children }: Props) {
  return (
    <aside className="aside">
      <header>
        <span>Online</span>
        <span>4</span>
      </header>
      <ul className="aside__users-online">{children}</ul>
    </aside>
  );
}

export default index;
