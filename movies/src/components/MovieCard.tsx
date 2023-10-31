import { Movie } from '../Interfaces/Movie';
import { addFavorite } from '../reducers/favoritesSlice';
import { useAppDispatch } from '../utils';

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const dispatch = useAppDispatch();

  const handleFavorite = async (event) => {
    event.preventDefault();
    try {
      const response: Response = await fetch(
        `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=f97da4c&plot=short`
      );
      const result = await response.json();
      if (result.Error) {
        throw new Error('Movie does not exist');
      }

      dispatch(addFavorite(result));
    } catch (error) {
      alert('Unable to set favorite, please try again...');
    }
  };

  return (
    <div className="movieCard p-4">
      <div className="flex gap-7 items-center mb-4">
        <img
          className="movieCardImage mt-4"
          src={movie.Poster}
          alt={movie.Title}
        />
        <button
          className="favoriteButton rounded-full p-2 mt-4"
          onClick={handleFavorite}
        >
          &#10084;
        </button>
      </div>
      <h4 className="text-center">{`${movie.Title} (${movie.Year})`}</h4>
    </div>
  );
};
