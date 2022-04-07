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
  return (
    <div className="section__profile">
      <div className="title">
        Perfil do <span>{username}</span>
      </div>
      <div className="box">
        <p>
          Nome:<span className="almost-invisible">. . .</span>
          <span>{username}</span>
        </p>
        <p>
          Idade: <span className="almost-invisible"> . . .</span>
          <span>{age}</span>
        </p>
        <p>
          Profissão:<span className="almost-invisible">.</span>
          <span>{profession}</span>
        </p>
      </div>
      <div className="title">Interesses</div>
      <div className="box">{interests}</div>
    </div>
  );
}

export default Profile;
