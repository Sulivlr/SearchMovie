import {showMovie} from "../../types";
import {createSlice} from "@reduxjs/toolkit";


interface movieState {
    movies: showMovie[];
    loading: boolean;
}

const initialState: movieState = {
    movies: [],
    loading: false,
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
})

export const movieReducer = movieSlice.reducer