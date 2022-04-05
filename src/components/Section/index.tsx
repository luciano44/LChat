import "./style.scss";
import backgroundLogo from "../../img/logos/background-logo/background-logo.png";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactChildren | React.ReactNode;
};

function Index({ children }: Props) {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1].toUpperCase();

  return (
    <section className="section">
      <header>
        <span>{path}</span>
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

export default Index;
