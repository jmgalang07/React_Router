import { createContext, useState } from "react";

export const GiftContext = createContext();

export function GiftProvider({ children }) {
  const [gifts, setGifts] = useState([]);

  const addGift = (name, description, navigate) => {
    if (!name.trim() || !description.trim()) return;
    setGifts([...gifts, { id: Date.now(), name, description }]);
    navigate("/list");
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift }}>
      {children}
    </GiftContext.Provider>
  );
}
