export default function SearchControls({ query, onQueryChange, categories, category, onCategoryChange }) {
  const searching = query.trim().length > 0;
  return (
    <div className="controls">
      <label>
        Search by name
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="e.g. pilau, pie, curry"
        />
      </label>
      <label>
        Browse by category
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          disabled={searching}
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
