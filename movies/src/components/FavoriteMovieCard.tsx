import { Movie } from '../Interfaces/Movie';
import { removeFavorite } from '../reducers/favoritesSlice';
import { useAppDispatch } from '../utils';

export const FavoriteMovieCard = ({
  favoriteMovie,
}: {
  favoriteMovie: Movie;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="favoriteMovie">
      <h1 className="text-center text-lg font-bold mb-4">
        {`${favoriteMovie.Title} (${favoriteMovie.Year})`}
      </h1>
      <div className="flex gap-2 w-full">
        <img
          className="favoriteMovieImg"
          src={favoriteMovie.Poster}
          alt={favoriteMovie.Title}
        />
        <div className="favoriteMovieBody flex flex-col justify-center pl-2">
          <p className="mb-4">{favoriteMovie.Plot}</p>
          <p>Runtime: {favoriteMovie.Runtime}</p>
          <p>Rated: {favoriteMovie.Rated}</p>
          <p>Genre: {favoriteMovie.Genre}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="button mt-4"
          onClick={() => dispatch(removeFavorite(favoriteMovie))}
        >
          Remove Favorite
        </button>
      </div>
    </div>
  );
};
