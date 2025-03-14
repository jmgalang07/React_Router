import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: null, bio: null });

  const saveUser = (name, bio) => {
    setUser({ name, bio });
  };

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  );
}
