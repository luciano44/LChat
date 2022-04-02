import "./style.scss";
import backgroundLogo from "../../img/logos/background-logo/background-logo.png";

const index: React.FC<{}> = ({ children }) => {
  return (
    <section className="section">
      <header>
        <span>CHAT</span>
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
};

export default index;
