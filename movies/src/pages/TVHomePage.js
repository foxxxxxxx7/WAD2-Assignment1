import React from "react";
import { getTVs } from "../api/tmdb-api";
import TemplateTVPage from '../components/templateTVListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TVHomePage = (props) => {

    const { data, error, isLoading, isError } = useQuery('discoverTV', getTVs)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const tv = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favorites = tv.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <TemplateTVPage
            name="Discover TV Shows"
            tv={tv}
            action={(tv) => {
                return <AddToFavoritesIcon tv={tv} />
            }}
        />
    );
};
export default TVHomePage;