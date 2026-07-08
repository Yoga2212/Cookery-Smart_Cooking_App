import React, { createContext, useState, useEffect } from "react";

export const PantryContext = createContext();

export function PantryProvider({ children }) {
  const [items, setItems] = useState({});

  // Load pantry items from localStorage on mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("pantryItems")) || {};
    setItems(storedItems);
  }, []);

  // Save pantry items whenever they change
  useEffect(() => {
    localStorage.setItem("pantryItems", JSON.stringify(items));
  }, [items]);

  return (
    <PantryContext.Provider value={{ items, setItems }}>
      {children}
    </PantryContext.Provider>
  );
}
