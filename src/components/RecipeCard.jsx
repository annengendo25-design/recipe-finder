import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton.jsx";

export default function RecipeCard({ meal }) {
  return (
    <article className="card">
      <Link to={`/recipe/${meal.idMeal}`}>
        <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} loading="lazy" />
        <h3>{meal.strMeal}</h3>
      </Link>
      <FavouriteButton meal={meal} />
    </article>
  );
}
