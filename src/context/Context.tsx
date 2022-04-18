import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type User = {
  name: string;
  age: number;
  profession: string;
  interests: string;
};

export const usersContext = createContext<{
  usersOnline: User[];
  jwt: string;
} | null>(null);

const Context = ({ children }: Props) => {
  const [usersOnline, setUsersOnline] = useState<User[]>([
    {
      name: "Bob Shmudarasd",
      age: 32,
      profession: "unemployed",
      interests: "soccer,golf,programming...",
    },
    {
      name: "Claire        Defan",
      age: 12,
      profession: "jobs asd 3aosif",
      interests: "nothing...",
    },
    {
      name: "John Doe",
      age: 52,
      profession: "lorem ipsum",
      interests: "cafe ,programming ahh322..",
    },
  ]);
  const [jwt, setJwt] = useState<string>("aosdiadsosad");

  return (
    <usersContext.Provider value={{ usersOnline, jwt }}>
      {children}
    </usersContext.Provider>
  );
};

export default Context;
