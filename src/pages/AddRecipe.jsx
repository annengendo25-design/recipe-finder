import { useState } from "react";
import { Link } from "react-router-dom";
import { useKitchen } from "../context/KitchenContext.jsx";

const CATEGORY_OPTIONS = ["Breakfast", "Main course", "Side dish", "Snack", "Dessert", "Drink"];
const EMPTY = { title: "", category: CATEGORY_OPTIONS[1], ingredients: "", instructions: "" };

function validate({ title, ingredients, instructions }) {
  const errors = {};
  if (title.trim().length < 3) errors.title = "Give your recipe a name of at least 3 characters.";
  if (ingredients.split("\n").filter((l) => l.trim()).length < 2)
    errors.ingredients = "List at least 2 ingredients, one per line.";
  if (instructions.trim().length < 20)
    errors.instructions = "Describe the method in at least 20 characters.";
  return errors;
}

export default function AddRecipe() {
  const { addOwnRecipe } = useKitchen();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setSaved(false);
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    addOwnRecipe({
      title: form.title.trim(),
      category: form.category,
      ingredients: form.ingredients.split("\n").map((l) => l.trim()).filter(Boolean),
      instructions: form.instructions.trim(),
    });
    setForm(EMPTY);
    setSaved(true);
  };

  return (
    <>
      <h1>Add your own recipe</h1>
      {saved && (
        <p className="success" role="status">
          Recipe saved. <Link to="/my-kitchen">View it in My kitchen</Link>
        </p>
      )}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label>
          Recipe name
          <input name="title" value={form.title} onChange={handleChange} aria-invalid={!!errors.title} />
          {errors.title && <span className="error">{errors.title}</span>}
        </label>
        <label>
          Category
          <select name="category" value={form.category} onChange={handleChange}>
            {CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label>
          Ingredients (one per line)
          <textarea name="ingredients" rows="5" value={form.ingredients} onChange={handleChange} aria-invalid={!!errors.ingredients} />
          {errors.ingredients && <span className="error">{errors.ingredients}</span>}
        </label>
        <label>
          Method
          <textarea name="instructions" rows="6" value={form.instructions} onChange={handleChange} aria-invalid={!!errors.instructions} />
          {errors.instructions && <span className="error">{errors.instructions}</span>}
        </label>
        <button className="btn" type="submit">Save recipe</button>
      </form>
    </>
  );
}
