import axios from "axios";

/* The code is setting up the base URL for making API requests to the MovieDB API. It also retrieves
the TMDB_TOKEN from the environment variables and sets it as the Authorization header for the API
requests. This allows the code to authenticate and access the MovieDB API using the provided token. */
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
