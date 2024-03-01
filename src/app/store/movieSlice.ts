import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from "../store.ts";
import { showMovie } from '../../types';

const initialState: { movies: showMovie[]; status: string } = {
    movies: [],
    status: '',
};


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (queryMovie: string) => {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${queryMovie}`);
        return response.data;
    }
);

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'idle';
                state.movies = action.payload;
            });
    },
});

export const selectAllMovies = (state: RootState) => state.movie.movies;
export const selectMoviesStatus = (state: RootState) => state.movie.status;

export default movieSlice.reducer;
