import "./style.scss";
import axios from "../../../scripts/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";

type User = {
  name: string;
  age: number;
  profession: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get("/users").then(({ data }) => {
      setUsers(data.usersDB);
    });
  }, []);

  useEffect(() => {
    users && setLoading((v) => !v);
  }, [users]);

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
      <ul className="section__users">
        {users &&
          users.map((user, i) => {
            const profileLink = `/perfil/${user.name}`;

            return (
              <Link to={profileLink} className="user" key={i}>
                <p>
                  <span>
                    <FaUserAlt /> {user.name}
                  </span>
                </p>
                <p>
                  Idade: <span>{user.age}</span>
                </p>
                <p>
                  Profissão: <span>{user.profession}</span>
                </p>
              </Link>
            );
          })}

        <li className="user invisible"></li>
        <li className="user invisible"></li>
      </ul>
    </>
  );
};

export default Users;
