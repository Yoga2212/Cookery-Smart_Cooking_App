import { createContext, useState, useEffect } from "react";

export const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  // Pantry items
  const [pantryItems, setPantryItems] = useState(() => {
    const saved = localStorage.getItem("pantryItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Grocery items
  const [groceryItems, setGroceryItems] = useState(() => {
    const saved = localStorage.getItem("groceryItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Meal planner items
  const [meals, setMeals] = useState(() => {
    const saved = localStorage.getItem("meals");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("pantryItems", JSON.stringify(pantryItems));
  }, [pantryItems]);

  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
  }, [groceryItems]);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  return (
    <AppDataContext.Provider
      value={{
        pantryItems,
        setPantryItems,
        groceryItems,
        setGroceryItems,
        meals,
        setMeals,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
