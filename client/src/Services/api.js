// client/src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change if backend runs elsewhere
});

// Attach token automatically for protected routes
API.interceptors.request.use((req) => {
  // ✅ Get token from localStorage.user
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth
export const registerUser = (data) => API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", {
    identifier: data.email || data.username,
    password: data.password,
  });

// ✅ Update user (protected route)
export const updateUser = (data) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?._id) {
    throw new Error("User not found in localStorage");
  }
  // Send userId along with updated data
  return API.put("/auth/update", { ...data, userId: user._id });
};

// Recipes
export const getRecipes = () => API.get("/recipes");
export const addRecipe = (data) => API.post("/recipes/add", data);
export const searchRecipes = (query) =>
  API.get(`/recipes/search?query=${encodeURIComponent(query)}`);

// Grocery
export const getGroceries = () => API.get("/grocery");
export const addGrocery = (data) => API.post("/grocery/add", data);

// Meal Planner
export const getMeals = (date) =>
  API.get(`/mealplanner?date=${encodeURIComponent(date || "")}`);
export const addMeal = (data) => API.post("/mealplanner/add", data);

// Pantry
export const getPantry = () => API.get("/pantry");
export const addPantryItem = (data) => API.post("/pantry/add", data);

export default API;
