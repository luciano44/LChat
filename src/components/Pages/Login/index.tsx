import "./style.scss";
import logo from "../../../img/logos/svg/logo-dark.svg";

const Login = () => {
  return (
    <div className="section__login">
      <div className="notification notification-error">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ab.
      </div>
      <img src={logo} alt="logo" />
      <form>
        <span>Nome</span>
        <input type="text" maxLength={30} />
        <span>Senha</span>
        <input type="password" maxLength={30} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
