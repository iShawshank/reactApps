import React, { Dispatch, useState } from 'react';

export const SearchMovies = ({
  searchForMovies,
}: {
  searchForMovies: Dispatch<string>;
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    searchForMovies(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 my-2">
      <label className="border border-black rounded">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for a movie title"
          onChange={handleChange}
          className="py-1 px-4 text-black"
        />
      </label>
      <input className="" type="submit" value="Submit" />
    </form>
  );
};
