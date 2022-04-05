import "./style.scss";
import { Link } from "react-router-dom";

type Props = {
  loggedIn: boolean;
};

function index({ loggedIn }: Props) {
  return (
    <div className="header__buttons">
      {loggedIn ? (
        <Link to="/sair" className="btn signout">
          Sair
        </Link>
      ) : (
        <>
          <Link to="/entrar" className="btn signin">
            Entrar
          </Link>
          <Link to="/cadastrar" className="btn signup">
            Cadastrar
          </Link>
        </>
      )}
    </div>
  );
}

export default index;
