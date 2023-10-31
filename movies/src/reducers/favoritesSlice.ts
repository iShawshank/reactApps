import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie } from '../Interfaces/Movie';
import { RootState } from '../store';

export interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'Favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const getFavorites = (state: RootState) =>
  state.favorites.favorites;

export default favoritesSlice.reducer;
