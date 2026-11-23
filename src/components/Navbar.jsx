import { NavLink } from "react-router-dom";
import { useKitchen } from "../context/KitchenContext.jsx";

export default function Navbar() {
  const { favourites } = useKitchen();
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand">Pantry Pal</NavLink>
        <nav aria-label="Main">
          <NavLink to="/" end>Recipes</NavLink>
          <NavLink to="/my-kitchen">My kitchen ({favourites.length})</NavLink>
          <NavLink to="/add">Add recipe</NavLink>
        </nav>
      </div>
    </header>
  );
}
