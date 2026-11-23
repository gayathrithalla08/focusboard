
import { Search } from "lucide-react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-box">
      <Search size={19} />

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        aria-label="Search tasks by title"
      />

      {searchQuery && (
        <button
          type="button"
          className="clear-search-button"
          onClick={() => setSearchQuery("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;
