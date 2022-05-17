import "./style.scss";
import axios from "../../../scripts/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

type User = {
  name: string;
  age: number;
  profession: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    axios.get("/users").then(({ data }) => {
      setUsers(data.usersDB);
    });
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <ul className="section__users">
      {users &&
        users.map((user, i) => {
          const profileLink = `/perfil/${user.name}`;

          return (
            <Link to={profileLink} className="user" key={i}>
              <p>
                {" "}
                <FaUserAlt /> {user.name}
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
  );
};

export default Users;
