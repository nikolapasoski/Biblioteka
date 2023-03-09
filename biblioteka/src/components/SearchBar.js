import React, { useState } from 'react';

function SearchBar({ handleSearch, handleDelete }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    handleDelete();
    setQuery('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} placeholder="Search by Title, Author or Genre" />
      <button type="submit">Search</button>
      <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
    </form>
  );
}

export default SearchBar;
