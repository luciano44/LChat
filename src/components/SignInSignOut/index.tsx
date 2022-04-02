import "./style.scss";

function index() {
  return (
    <div className="header__buttons">
      <button className="signin">Entrar</button>
      <button className="signup">Cadastrar</button>
      <button className="signout">Sair</button>
    </div>
  );
}

export default index;
