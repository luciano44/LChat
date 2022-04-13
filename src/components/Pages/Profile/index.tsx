import { useContext } from "react";
import { usersContext } from "../../../context/Context";
import "./style.scss";

type Props = {
  user: {
    username: string;
    age: number;
    profession: string;
    interests: string;
  };
};

function Profile({ user: { username, age, profession, interests } }: Props) {
  const ctx = useContext(usersContext);
  const profileInfo = ctx?.profileInfo;

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
