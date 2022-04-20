import "./style.scss";

function Profile() {
  /**************************
  /**************************
  /**************************
   * 
   // UPDATE!!!!!!!!!!!! -> grab user on endpoint with useLocation and search for his data on database to populate component

   /**************************
   /**************************
   /**************************
   */

  return (
    <div className="section__profile">
      <div className="title">
        Perfil do <span>LOREM IPSUM</span>
      </div>
      <div className="box">
        <p>
          Nome:<span className="almost-invisible">. . .</span>
          <span>LOREM IPSUM</span>
        </p>
        <p>
          Idade: <span className="almost-invisible"> . . .</span>
          <span>LOREM IPSUM</span>
        </p>
        <p>
          Profissão:<span className="almost-invisible">.</span>
          <span>LOREM IPSUM</span>
        </p>
      </div>
      <div className="title">Interesses</div>
      <div className="box">LOREM IPSUM</div>
    </div>
  );
}

export default Profile;
