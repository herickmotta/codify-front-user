import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);
  const [lastTaskData, setLastTaskData] = useState();

  return (
    <UserContext.Provider
      value={{ user, setUser, lastTaskData, setLastTaskData }}
    >
      {children}
    </UserContext.Provider>
  );
}
