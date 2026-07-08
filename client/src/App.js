import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";
import Pantry from "./pages/Pantry";
import GroceryList from "./pages/GroceryList";
import MealPlanner from "./pages/MealPlanner";
import Navbar from "./components/Navbar";
import { PantryProvider } from "./context/PantryContext";
import { AppDataProvider } from "./context/AppDataContext";
import Settings from "./pages/Settings";
import CategoryRecipes from "./pages/CategoryRecipes";

import RecipeDetails from "./pages/RecipeDetails";


function App() {
  return (
    <PantryProvider>
      <AppDataProvider>
        <Router>
          <Routes>
            {/* Default route */}
            <Route path="/" element={<Login />} />

            {/* Auth pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected pages */}
            <Route path="/home" element={<><Navbar /><Home /></>} />
            <Route path="/categories" element={<><Navbar /><Categories /></>} />
            <Route path="/recipes" element={<><Navbar /><Recipes /></>} />
            <Route path="/pantry" element={<><Navbar /><Pantry /></>} />
            <Route path="/grocery" element={<><Navbar /><GroceryList /></>} />
            <Route path="/mealplanner" element={<><Navbar /><MealPlanner /></>} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/category-recipes" element={<CategoryRecipes />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />

          </Routes>
        </Router>
      </AppDataProvider>
    </PantryProvider>
  );
}

export default App;
