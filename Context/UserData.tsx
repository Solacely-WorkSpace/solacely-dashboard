"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getUser } from "../lib/auth";

type User = {
  user: {
    profile_image: string | null;
    [key: string]: any;
  };
  [key: string]: any;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const userContext = createContext<UserContextType | undefined>(undefined);

export const UserData = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => getUser());

  useEffect(() => {
    const userStored = getUser();
    if (userStored) {
      setUser(userStored);
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUser must be used within a UserData provider");
  }
  return context;
};
