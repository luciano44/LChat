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

export const usersContext = createContext<{
  usersOnline: User[];
  setUsersOnline: React.Dispatch<React.SetStateAction<User[]>>;
  jwt: string | null;
  setJwt: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

const Context = ({ children }: Props) => {
  const [usersOnline, setUsersOnline] = useState<User[]>([
    {
      id: 32,
      name: "Bob Shmudarasd",
    },
    {
      id: 12,
      name: "Claire Defan",
    },
  ]);
  const [jwt, setJwt] = useState<string>("");

  const socket = io("http://localhost:3001");

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`connected with ID: ${socket.id}`);
    });
  });

  return (
    <usersContext.Provider value={{ usersOnline, setUsersOnline, jwt, setJwt }}>
      {children}
    </usersContext.Provider>
  );
};

export default Context;
