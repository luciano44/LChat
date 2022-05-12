import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { usersContext } from "../../context/Context";

const SignOut = () => {
  const context = useContext(usersContext);
  const jwt = context?.jwt;
  const setJwt = context?.setJwt!;

  useEffect(() => {
    jwt && setJwt("");
    localStorage.setItem("token", "");
  });

  return <Navigate to="/" />;
};

export default SignOut;
