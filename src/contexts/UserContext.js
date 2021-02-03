import React, { useState, createContext } from "react";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Usuário",
    photo:
      "https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
