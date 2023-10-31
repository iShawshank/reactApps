import { useState } from 'react';
import { Movie } from './Interfaces/Movie';
import { SearchMovies } from './components/SearchMovies';
import { MoviesList } from './components/MoviesList';
import { FavoriteMovies } from './components/FavoriteMovies';

interface IMovieResponse {
  Search?: Movie[];
  totalResults?: string;
  Response: string;
}

function App() {
  const [isError, setIsError] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (movieTitle: string) => {
    setMovies([]);
    setIsError(false);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${movieTitle}&apikey=f97da4c&type=movie`
      );
      const results: IMovieResponse = await res.json();

      if (
        results.Response.toLowerCase() !== 'true' ||
        results.Search === undefined
      ) {
        throw new Error('Movie does not exist');
      }

      setMovies(
        results.Search.filter((movie) => movie.Poster !== 'N/A')
      );
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-700 h-screen w-screen overflow-auto">
      <h1 className='text-3xl mt-4'>Movies</h1>
      {isError && (
        <p className="text-lg text-red-600 font-bold italic">
          Movie not found
        </p>
      )}
      <SearchMovies searchForMovies={searchMovies} />
      <MoviesList movies={movies} />
      <FavoriteMovies />
    </div>
  );
}

export default App;
