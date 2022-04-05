import "./style.scss";
import logo from "../../../img/logos/normal-size-logos/logo-dark.svg";

const index = () => {
  return (
    <div className="section__register">
      <div className="notification notification-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ab.
      </div>
      <img src={logo} alt="logo" />
      <form>
        <span>Login</span>
        <input type="text" maxLength={30} />
        <span>Senha</span>
        <input type="password" maxLength={30} />
        <span>Idade</span>
        <input type="number" max={99} />
        <span>Profissão</span>
        <input type="text" maxLength={30} />
        <span>Interesses</span>

        <textarea name="textarea" cols={30} rows={7} maxLength={800}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default index;
