import React from "react";
import { useLocation } from "react-router-dom";

interface SearchResultsProps {
  searchTerm: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchTerm }) => {
  // Perform the search operation using searchTerm and the large JSON file
  // Fetch the search results and render them on the page

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      {/* Render the search results */}
    </div>
  );
};
