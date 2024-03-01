import React, { useState } from "react";

const MovieInput = () => {
    const [queryMovie, setQueryMovie] = useState('');

    const inputChange = (e: React.ChangeEvent<HTMLSelectElement>) => setQueryMovie(e.target.value);

    return (
        <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            value={queryMovie}
            onChange={inputChange}
        >
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    );
};

export default MovieInput;
