// Renders the loading, error and empty states; shows children when data is ready.
export default function AsyncState({ loading, error, isEmpty, emptyMessage, onRetry, children }) {
  if (loading) {
    return (
      <div className="state" role="status">
        <div className="spinner" aria-hidden="true" />
        <p>Loading recipes...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="state" role="alert">
        <h2>We couldn't load that</h2>
        <p>{error} Check your connection and try again.</p>
        {onRetry && <button className="btn" onClick={onRetry}>Try again</button>}
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div className="state">
        <h2>Nothing here yet</h2>
        <p>{emptyMessage}</p>
      </div>
    );
  }
  return children;
}
