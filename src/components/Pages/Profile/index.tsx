import { useContext } from "react";
import { usersContext } from "../../../context/Context";
import "./style.scss";

function Profile() {
  const ctx = useContext(usersContext);
  const profileInfo = ctx?.profileInfo;

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
        Perfil do <span>{profileInfo?.name}</span>
      </div>
      <div className="box">
        <p>
          Nome:<span className="almost-invisible">. . .</span>
          <span>{profileInfo?.name}</span>
        </p>
        <p>
          Idade: <span className="almost-invisible"> . . .</span>
          <span>{profileInfo?.age}</span>
        </p>
        <p>
          Profissão:<span className="almost-invisible">.</span>
          <span>{profileInfo?.profession}</span>
        </p>
      </div>
      <div className="title">Interesses</div>
      <div className="box">{profileInfo?.interests}</div>
    </div>
  );
}

export default Profile;
