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

const socket = io("http://localhost:3001");

const Context = ({ children }: Props) => {
  const [usersOnline, setUsersOnline] = useState<User[]>([]);
  const [jwt, setJwt] = useState<string>(localStorage.getItem("token")!);
  const [id, setId] = useState<number | undefined>(undefined);
  const [myName, setMyName] = useState<string>("");
  const [messages, setMessages] = useState<MessagesType[]>([
    // {
    //   author: "Bob",
    //   message:
    //     "xxxxxxxLorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel dolores temporibus recusandae laboriosam quas perferendis dignissimos repudiandae amet maxime ratione tenetur cumque, porro veritatis hic sequi",
    // },
    // {
    //   author: "iamtheone34",
    //   message:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel dolores temporibus recusandae laboriosam quas perferendis dignissimos repudiandae amet maxime ratione tenetur cumque, porro veritatis hic sequi, quisquam accusantium est laudantium illo quaerat ab alias aliquid. Vero quia natus recusandae harum illum, unde voluptate nihil quam veniam ullam ipsa architecto.",
    // },
    // {
    //   author: "bob",
    //   message:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel dolores temporibus recusandae laboriosam quas perferendis dignissimos repudiandae amet maxime ratione tenetur cumque, porro veritatis hic sequi, quisquam accusantium est laudantium illo quaerat ab alias aliquid. Vero quia natus recusandae harum illum, unde voluptate nihil quam veniam ullam ipsa architecto.",
    // },
  ]);

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
