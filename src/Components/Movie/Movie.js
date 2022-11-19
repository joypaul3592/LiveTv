import React, { useEffect, useState } from 'react';

const Movie = () => {
    const [moviedata, setMovieData] = useState()

    useEffect(() => {




        const API_key = '&api_key=84743ee32095533fcd630a3079c2d3f0',
            base_url = 'https://api.themoviedb.org/3'
        let url = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`


        // const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;

        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data.results));

        // const API_BASE = "https://api.themoviedb.org/3";
        // const API_KEY =
        //     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2ZmNjljNmRiM2YxMjgxZTk2ZTRlODQ5ZWRhNmQ2NSIsInN1YiI6IjU2YzRhZmU1YzNhMzY4MGQzZTAwMDIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-TqKfzJ2O4yVBYI0aiaUDgkg_WDRhOoRfnC5U-QE2SU";

        // const url = `/search/movie?query/movie/popular`;

        // fetch(`${API_BASE}${API_KEY}`)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

    }, [])



    return (
        <div>

        </div>
    );
};

export default Movie;