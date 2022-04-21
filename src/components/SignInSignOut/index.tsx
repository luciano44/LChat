import "./style.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { usersContext } from "../../context/Context";

function SignInSignOut() {
  const context = useContext(usersContext);
  const jwt = context?.jwt;

  return (
    <div className="header__buttons">
      {jwt ? (
        <Link to="/sair" className="btn signout">
          Sair
        </Link>
      ) : (
        <>
          <Link to="/entrar" className="btn signin">
            Entrar
          </Link>
          <Link to="/cadastrar" className="btn signup">
            Cadastre-se
          </Link>
        </>
      )}
    </div>
  );
}

export default SignInSignOut;
