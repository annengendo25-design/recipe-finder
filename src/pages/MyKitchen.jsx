import { Link } from "react-router-dom";
import { useKitchen } from "../context/KitchenContext.jsx";
import RecipeGrid from "../components/RecipeGrid.jsx";

export default function MyKitchen() {
  const { favourites, ownRecipes, removeOwnRecipe } = useKitchen();

  return (
    <>
      <h1>My kitchen</h1>

      <h2>Saved recipes</h2>
      {favourites.length === 0 ? (
        <div className="state">
          <p>You haven't saved any recipes yet.</p>
          <Link className="btn" to="/">Find something to cook</Link>
        </div>
      ) : (
        <RecipeGrid meals={favourites} />
      )}

      <h2>My own recipes</h2>
      {ownRecipes.length === 0 ? (
        <div className="state">
          <p>Recipes you write yourself will show up here.</p>
          <Link className="btn" to="/add">Add a recipe</Link>
        </div>
      ) : (
        <div className="own-list">
          {ownRecipes.map((r) => (
            <details key={r.id} className="own">
              <summary>{r.title} <span className="meta">({r.category})</span></summary>
              <ul className="ingredients">
                {r.ingredients.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p>{r.instructions}</p>
              <button className="btn danger" onClick={() => removeOwnRecipe(r.id)}>Delete recipe</button>
            </details>
          ))}
        </div>
      )}
    </>
  );
}
