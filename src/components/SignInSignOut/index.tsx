import "./style.scss";

type Props = {
  loggedIn: boolean;
};

function index({ loggedIn }: Props) {
  return (
    <div className="header__buttons">
      {loggedIn ? (
        <button className="signout">Sair</button>
      ) : (
        <>
          <button className="signin">Entrar</button>
          <button className="signup">Cadastrar</button>
        </>
      )}
    </div>
  );
}

export default index;
