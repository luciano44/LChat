import "./style.scss";
import backgroundLogo from "../../img/logos/background-logo/background-logo.png";

type Props = {
  children: React.ReactChildren | React.ReactNode;
  title: string;
};

function index({ children, title }: Props) {
  return (
    <section className="section">
      <header>
        <span>{title}</span>
      </header>
      <div className="section__wrapper">
        <img
          src={backgroundLogo}
          alt="background logo"
          className="section__background-logo"
        />
        {children}
      </div>
    </section>
  );
}

export default index;
