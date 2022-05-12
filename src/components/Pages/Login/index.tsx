import "./style.scss";
import logo from "../../../img/logos/svg/logo-dark.svg";
import axios from "../../../scripts/axios";
import { useState, useContext, useRef, useEffect } from "react";
import { usersContext } from "../../../context/Context";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [notificationMsg, setNotificationMsg] = useState<string>("");
  const [notificationClasses, setNotificationClasses] =
    useState<string>("notification");

  const context = useContext(usersContext);
  const jwt = context?.jwt;
  const setJwt = context?.setJwt!;

  const inputNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputNameRef.current?.focus();
  }, []);

  function showNotification(msg: string, classes: string) {
    setNotificationMsg(msg);
    setNotificationClasses(classes);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    axios
      .post("/signin", { name, pwd })
      .then(({ data }) => {
        showNotification(data.msg, "notification notification-success");
        setJwt(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch(({ response }) => {
        showNotification(response.data.msg, "notification notification-error");
      });
  }

  if (jwt) return <Navigate to="/" />;

  return (
    <div className="section__login">
      <div className={notificationClasses}>{notificationMsg}</div>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <span>Nome</span>
        <input
          type="text"
          maxLength={30}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          ref={inputNameRef}
        />
        <span>Senha</span>
        <input
          type="password"
          maxLength={30}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          value={pwd}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
