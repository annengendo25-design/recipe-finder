# Pantry Pal

## Description
Pantry Pal helps home cooks decide what to make. Search thousands of recipes by name or browse by category, read the full ingredients and method, save the ones you love, and add your own family recipes in one place.

**Who it's for:** anyone who wants quick dinner ideas and a personal recipe collection that lives in their browser.

## Features
- Search recipes by name (debounced) or browse by category
- Recipe details page with ingredients, method, and video link
- Save and unsave favourite recipes (persisted in localStorage)
- Add your own recipes through a validated form; view and delete them in My kitchen
- Loading, error (with retry), and empty states on every data view
- Responsive layout for mobile, tablet, and desktop

## Technologies Used
- React 18 (hooks, Context API)
- React Router v6
- Vite
- [TheMealDB API](https://www.themealdb.com/api.php) (free, no key required)
- Plain CSS (responsive grid and flexbox)

## Installation and Setup
```bash
git clone <your-repo-url>
cd recipe-finder
npm install
npm run dev
```
Build for production with `npm run build`.

## Project Structure
```
src/
  api/         API URL helpers and ingredient parsing
  components/  Navbar, RecipeCard, RecipeGrid, SearchControls, AsyncState, FavouriteButton
  context/     KitchenContext (favourites and own recipes)
  hooks/       useFetch, useDebounce, useLocalStorage
  pages/       Home, RecipeDetails, MyKitchen, AddRecipe
```

## Live Demo
<add your deployed link here>

## Screenshots
<add screenshots of Home, Recipe details, My kitchen and Add recipe here>
