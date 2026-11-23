import { useState } from "react";
import useFetch from "../hooks/useFetch.js";
import useDebounce from "../hooks/useDebounce.js";
import { searchUrl, categoryUrl, CATEGORIES_URL } from "../api/mealdb.js";
import SearchControls from "../components/SearchControls.jsx";
import RecipeGrid from "../components/RecipeGrid.jsx";
import AsyncState from "../components/AsyncState.jsx";

const FALLBACK_CATEGORIES = ["Beef", "Chicken", "Dessert", "Seafood", "Vegetarian"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Chicken");
  const term = useDebounce(query.trim());

  const { data: catData } = useFetch(CATEGORIES_URL);
  const categories = catData?.meals?.map((m) => m.strCategory) ?? FALLBACK_CATEGORIES;

  const url = term ? searchUrl(term) : categoryUrl(category);
  const { data, loading, error, retry } = useFetch(url);
  const meals = data?.meals ?? [];

  return (
    <>
      <h1>What are you cooking today?</h1>
      <SearchControls
        query={query}
        onQueryChange={setQuery}
        categories={categories}
        category={category}
        onCategoryChange={setCategory}
      />
      <AsyncState
        loading={loading}
        error={error}
        isEmpty={meals.length === 0}
        emptyMessage={term ? `No recipes match "${term}". Try a shorter or different word.` : "No recipes in this category."}
        onRetry={retry}
      >
        <RecipeGrid meals={meals} />
      </AsyncState>
    </>
  );
}
