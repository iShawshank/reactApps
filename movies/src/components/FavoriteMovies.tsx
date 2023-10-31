import { getFavorites } from '../reducers/favoritesSlice';
import { useAppSelector } from '../utils';
import { FavoriteMovieCard } from './FavoriteMovieCard';

export const FavoriteMovies = () => {
  const favorites = useAppSelector(getFavorites);

  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="mb-4 text-xl">Favorite Movies</h1>
      {favorites.length ? (
        <div className="flex flex-wrap justify-center">
          {favorites.map((favoriteMovie) => (
            <FavoriteMovieCard
              key={favoriteMovie.imdbID}
              favoriteMovie={favoriteMovie}
            />
          ))}
        </div>
      ) : (
        <p>You have no favorites</p>
      )}
    </div>
  );
};
