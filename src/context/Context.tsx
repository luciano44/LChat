import { createContext, useContext, useState } from "react";

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
  profileInfo: User;
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
      name: "Claire Defan",
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
  const [profileInfo, setProfileInfo] = useState<User>({
    name: "Luciano44",
    age: 25,
    profession: "Programmer",
    interests: "Programming, eating, sleeping and jogging.",
  });

  return (
    <usersContext.Provider value={{ usersOnline, profileInfo }}>
      {children}
    </usersContext.Provider>
  );
};

export default Context;
