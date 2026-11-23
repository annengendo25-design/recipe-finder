const BASE = "https://www.themealdb.com/api/json/v1/1";

export const searchUrl = (term) => `${BASE}/search.php?s=${encodeURIComponent(term)}`;
export const categoryUrl = (name) => `${BASE}/filter.php?c=${encodeURIComponent(name)}`;
export const detailsUrl = (id) => `${BASE}/lookup.php?i=${encodeURIComponent(id)}`;
export const CATEGORIES_URL = `${BASE}/list.php?c=list`;

// TheMealDB stores ingredients as strIngredient1..20 / strMeasure1..20.
export function getIngredients(meal) {
  const items = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`]?.trim();
    if (name) items.push({ name, measure: meal[`strMeasure${i}`]?.trim() || "" });
  }
  return items;
}
