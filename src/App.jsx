import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import MyKitchen from "./pages/MyKitchen.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/my-kitchen" element={<MyKitchen />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route
            path="*"
            element={
              <div className="state">
                <h2>That page doesn't exist</h2>
                <Link className="btn" to="/">Back to recipes</Link>
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
}
