import "./style.scss";
import logo from "../../../img/logos/svg/logo-dark.svg";
import { useRef, useState, useEffect, useContext } from "react";
import axios from "../../../scripts/axios";
import { Navigate } from "react-router-dom";
import { usersContext } from "../../../context/Context";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [interests, setInterests] = useState<string>("");

  const [notificationMsg, setNotificationMsg] = useState<string>("");
  const [notificationClasses, setNotificationClasses] =
    useState<string>("notification");

  const context = useContext(usersContext);
  const jwt = context?.jwt;

  function submitHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    axios
      .post("/signup", { name, pwd, age, profession, interests })
      .then((res) => {
        console.log(res);
        setNotificationMsg(res.data.msg);
        if (res.status === 201) {
          setNotificationClasses("notification notification-success");

          setName("");
          setPwd("");
          setAge("");
          setProfession("");
          setInterests("");
        }

        setTimeout(() => {
          window.location.href = "/entrar";
        }, 1500);
      })
      .catch((err) => {
        console.log(err.response);
        setNotificationMsg(err.response.data.msg);
        setNotificationClasses("notification notification-error");
      });
  }

  const inputNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputNameRef.current?.focus();
  }, []);

  if (jwt) return <Navigate to="/" />;

  return (
    <div className="section__register">
      <div className={notificationClasses}>{notificationMsg}</div>
      <img src={logo} alt="logo" />
      <form onSubmit={submitHandler}>
        <span>Nome</span>
        <input
          ref={inputNameRef}
          type="text"
          maxLength={30}
          onChange={(e) => {
            {
              setName(e.target.value);
            }
          }}
          value={name}
        />
        <span>Senha</span>
        <input
          type="password"
          maxLength={30}
          onChange={(e) => {
            {
              setPwd(e.target.value);
            }
          }}
          value={pwd}
        />
        <span>Idade</span>
        <input
          type="number"
          max={99}
          onChange={(e) => {
            {
              setAge(e.target.value);
            }
          }}
          value={age}
        />
        <span>Profissão</span>
        <input
          type="text"
          maxLength={30}
          onChange={(e) => {
            {
              setProfession(e.target.value);
            }
          }}
          value={profession}
        />
        <span>Interesses</span>

        <textarea
          name="textarea"
          cols={30}
          rows={7}
          maxLength={800}
          onChange={(e) => {
            {
              setInterests(e.target.value);
            }
          }}
          value={interests}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Register;
