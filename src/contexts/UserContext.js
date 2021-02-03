import React, { useState, createContext } from "react";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
