"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getUser } from "@/lib/auth";

const userContext = createContext();

export const UserData = ({ children }) => {
  const [user, setUser] = useState(() => getUser());

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

export const useUser = () => useContext(userContext);
