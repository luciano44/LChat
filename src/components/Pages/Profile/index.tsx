import "./style.scss";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import axios from "../../../scripts/axios";

type User = {
  name: string;
  age: number;
  profession: string;
  interests: string;
};

function Profile() {
  const [error, setError] = useState(false);
  const [userDB, setUserDB] = useState<User | null>(null);

  const { user } = useParams();

  useEffect(() => {
    axios
      .get(`/users/${user}`)
      .then(({ data }) => {
        setError(false);
        setUserDB(data.userDB);
      })
      .catch(() => setError(true));
  }, [user]);

  return (
    <div className="section__profile">
      {error ? (
        <div className="user-not-found">
          <p>404</p>
          <p>Usuário inexistente</p>
          <Link to="/">
            <GiReturnArrow /> <span>Voltar</span>
          </Link>
        </div>
      ) : (
        <>
          <div className="title">
            Perfil do <span>{userDB?.name}</span>
          </div>
          <div className="box">
            <p>
              Nome:<span className="almost-invisible">. . .</span>
              <span>{userDB?.name}</span>
            </p>
            <p>
              Idade: <span className="almost-invisible"> . . .</span>
              <span>{userDB?.age}</span>
            </p>
            <p>
              Profissão:<span className="almost-invisible">.</span>
              <span>{userDB?.profession}</span>
            </p>
          </div>
          <div className="title">Interesses</div>
          <div className="box">{userDB?.interests}</div>
        </>
      )}
    </div>
  );
}

export default Profile;
