import { useKitchen } from "../context/KitchenContext.jsx";

export default function FavouriteButton({ meal }) {
  const { isFavourite, toggleFavourite } = useKitchen();
  const saved = isFavourite(meal.idMeal);
  return (
    <button
      className={`fav ${saved ? "saved" : ""}`}
      onClick={() => toggleFavourite(meal)}
      aria-pressed={saved}
    >
      {saved ? "Saved" : "Save"}
    </button>
  );
}
