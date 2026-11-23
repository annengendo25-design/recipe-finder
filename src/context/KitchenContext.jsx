import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const KitchenContext = createContext(null);

export function KitchenProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("pp-favourites", []);
  const [ownRecipes, setOwnRecipes] = useLocalStorage("pp-own-recipes", []);

  const isFavourite = (id) => favourites.some((f) => f.idMeal === id);

  const toggleFavourite = (meal) =>
    setFavourites((list) =>
      list.some((f) => f.idMeal === meal.idMeal)
        ? list.filter((f) => f.idMeal !== meal.idMeal)
        : [...list, { idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: meal.strMealThumb }]
    );

  const addOwnRecipe = (recipe) =>
    setOwnRecipes((list) => [{ ...recipe, id: crypto.randomUUID() }, ...list]);

  const removeOwnRecipe = (id) => setOwnRecipes((list) => list.filter((r) => r.id !== id));

  return (
    <KitchenContext.Provider
      value={{ favourites, ownRecipes, isFavourite, toggleFavourite, addOwnRecipe, removeOwnRecipe }}
    >
      {children}
    </KitchenContext.Provider>
  );
}

export const useKitchen = () => useContext(KitchenContext);
