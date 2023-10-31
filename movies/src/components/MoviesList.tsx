import { Movie } from '../Interfaces/Movie';
import { MovieCard } from './MovieCard';

export const MoviesList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="moviesList mt-4">
      <h4 className="text-xl mb-2 text-center">Searched Movies</h4>
      {movies.length ? (
        <div className="flex flex-wrap justify-center gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Search some movies!</p>
      )}
    </div>
  );
};
