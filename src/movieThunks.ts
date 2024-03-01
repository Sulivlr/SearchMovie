import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSeries = createAsyncThunk(
    'series/fetchSeries',
    async (queryMovie: string) => {
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${queryMovie}`);
        return response.data;
    }
);

export class fetchMovie {
}