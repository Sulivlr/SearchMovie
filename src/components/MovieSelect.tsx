import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllMovies, selectMoviesStatus } from "../app/store/movieSlice.ts";
import { fetchMovie } from "../movieThunks.ts";

const MovieSelect = () => {
    const [queryMovie, setQueryMovie] = useState('');
    const movies = useSelector(selectAllMovies);
    const status = useSelector(selectMoviesStatus);
    const dispatch = useDispatch();

    const inputChange = (e: React.ChangeEvent<HTMLSelectElement>) => setQueryMovie(e.target.value);

    const search = () => {
        if (queryMovie) {
            dispatch(fetchMovie(queryMovie));
        }
    }

    return (
        <div>
            <select
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
                value={queryMovie}
                onChange={inputChange}
            >
                <option value="">Open this select menu</option>
                {movies.map(movie => (
                    <option key={movie.id} value={movie.id}>{movie.name}</option>
                ))}
            </select>
            <button onClick={search}>Search</button>
        </div>
    );
};

export default MovieSelect;