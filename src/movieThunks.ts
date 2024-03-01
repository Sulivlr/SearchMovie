import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {showMovie} from "./types";

export const fetchMovie = createAsyncThunk<void, showMovie>('movie/fetchMovies',
    async (apiMovieData) => {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=${queryMovie}');
        return  response.data;
    }
)