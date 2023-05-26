import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Known Disabilities..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
