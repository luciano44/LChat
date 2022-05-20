import "./style.scss";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { ImUser, ImHeart } from "react-icons/im";
import { BiLoaderAlt } from "react-icons/bi";
import axios from "../../../scripts/axios";

type User = {
  name: string;
  age: number;
  profession: string;
  interests: string;
  date: string;
};

function Profile() {
  const [error, setError] = useState(false);
  const [userDB, setUserDB] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { user } = useParams();

  useEffect(() => {
    axios
      .get(`/users/${user}`)
      .then(({ data }) => {
        setError(false);
        setUserDB(data.userDB);
      })
      .catch(() => {
        setError(true);
        setLoading((v) => !v);
      });
  }, [user]);

  useEffect(() => {
    userDB ? setLoading(false) : setLoading(true);
  }, [userDB]);

  useEffect(() => {
    error && setLoading(false);
  });

  return (
    <>
      {loading && (
        <>
          <h3>
            <BiLoaderAlt />
            Carregando...
          </h3>
        </>
      )}
      <div className="section__profile">
        {error && (
          <div className="user-not-found">
            <p>404</p>
            <p>Usuário inexistente</p>
            <Link to="/">
              <GiReturnArrow /> <span>Voltar</span>
            </Link>
          </div>
        )}
        {!loading && !error && (
          <>
            <div className="title">
              <ImUser />
              <span>{userDB?.name}</span>
            </div>
            <div className="box">
              <div className="description">
                <span>Registro: </span>
                <span>Nome: </span>
                <span>Idade: </span>
                <span>Profissão: </span>
              </div>
              <div className="data">
                <span>
                  {new Date(userDB?.date!).toLocaleString("pt-br", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </span>
                <span>{userDB?.name} </span>
                <span>{userDB?.age} </span>
                <span>{userDB?.profession} </span>
              </div>
            </div>
            <div className="title">
              <ImHeart /> <span>Interesses</span>
            </div>
            <div className="box">{userDB?.interests}</div>
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
