import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { detailsUrl, getIngredients } from "../api/mealdb.js";
import AsyncState from "../components/AsyncState.jsx";
import FavouriteButton from "../components/FavouriteButton.jsx";

export default function RecipeDetails() {
  const { id } = useParams();
  const { data, loading, error, retry } = useFetch(detailsUrl(id));
  const meal = data?.meals?.[0];

  return (
    <>
      <Link to="/" className="back">&larr; All recipes</Link>
      <AsyncState
        loading={loading}
        error={error}
        isEmpty={!meal}
        emptyMessage="We couldn't find that recipe. It may have been removed."
        onRetry={retry}
      >
        {meal && (
          <article className="details">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div>
              <h1>{meal.strMeal}</h1>
              <p className="meta">{meal.strCategory} &middot; {meal.strArea}</p>
              <FavouriteButton meal={meal} />
              <h2>Ingredients</h2>
              <ul className="ingredients">
                {getIngredients(meal).map(({ name, measure }) => (
                  <li key={name}><strong>{measure}</strong> {name}</li>
                ))}
              </ul>
            </div>
            <section className="steps">
              <h2>Method</h2>
              {meal.strInstructions.split(/\r?\n/).filter(Boolean).map((step, i) => (
                <p key={i}>{step}</p>
              ))}
              {meal.strYoutube && (
                <a className="btn" href={meal.strYoutube} target="_blank" rel="noreferrer">Watch on YouTube</a>
              )}
            </section>
          </article>
        )}
      </AsyncState>
    </>
  );
}
