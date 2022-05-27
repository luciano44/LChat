import { createContext, useState } from "react";
import { useEffect } from "react";
const io = require("socket.io-client");

type Props = {
  children: React.ReactNode;
};

type User = {
  id: number;
  name: string;
};

type MessagesType = {
  author: string;
  message: string;
};

export const usersContext = createContext<{
  usersOnline: User[];
  setUsersOnline: React.Dispatch<React.SetStateAction<User[]>>;
  jwt: string | null;
  setJwt: React.Dispatch<React.SetStateAction<string>>;
  messages: MessagesType[];
  myName: string;
  sendMessage: (msg: string) => void;
} | null>(null);

const url = `${process.env.REACT_APP_BACKEND_URL}` || "http://localhost:3001";

// const url = "http://localhost:3001/";

const socket = io(url);

const Context = ({ children }: Props) => {
  const [usersOnline, setUsersOnline] = useState<User[]>([]);
  const [jwt, setJwt] = useState<string>(localStorage.getItem("token")!);
  const [id, setId] = useState<number | undefined>(undefined);
  const [myName, setMyName] = useState<string>("");
  const [messages, setMessages] = useState<MessagesType[]>([]);

  useEffect(() => {
    socket.on("connect", () => {
      setId(socket.id);

      socket.on("update-users", (users: User[]) => {
        setUsersOnline(users);
      });

      socket.on("receive-msg", (msg: MessagesType) => {
        setMessages((prev) => [...prev, msg]);
      });

      socket.on("user-not-logged-in", () => {
        alert(
          "MENSAGEM NÃO ENVIADA, faça o LOGIN para poder usar o Chat, ou CADASTRE-SE caso não possua uma conta."
        );
      });
    });
  }, []);

  useEffect(() => {
    if (!jwt) {
      socket.emit("logout", id);
    }
  }, [jwt]);

  useEffect(() => {
    socket.emit("login", { id, token: jwt });
  }, [jwt, id]);

  useEffect(() => {
    const user = usersOnline.find((user) => {
      if (user.id === id) {
        return user;
      }
    });
    if (user?.name) {
      setMyName(user.name);
    }
  }, [usersOnline, id]);

  function sendMessage(msg: string) {
    socket.emit("send-msg", msg);
  }

  return (
    <usersContext.Provider
      value={{
        usersOnline,
        setUsersOnline,
        jwt,
        setJwt,
        messages,
        sendMessage,
        myName,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default Context;
