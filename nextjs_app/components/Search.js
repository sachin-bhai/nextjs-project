import React, { useState } from 'react'
import styles from "./Search.module.css"
export default function SearchBar({ query, onQueryChange }) {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    onQueryChange(search);
    console.log(query)
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        placeholder='  Search...'
        value={search}
        onChange={handleInputChange}
      />
      <button type='submit' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

