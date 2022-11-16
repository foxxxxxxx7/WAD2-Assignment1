import React, { useContext } from "react";
import { TVContext } from "../../contexts/TVContext";
import IconButton from "@mui/material/IconButton";
import FavoriteTVIcon from "@mui/icons-material/Favorite";

const AddToTVFavoritesIcon = ({ tv }) => {
    const context = useContext(TVContext);

<<<<<<< Updated upstream
    const handleAddTVToFavorites = (e) => {
=======
    const handleAddToTVFavorites = (e) => {
>>>>>>> Stashed changes
        e.preventDefault();
        context.addToTVFavorites(tv);
    };

    return (
<<<<<<< Updated upstream
        <IconButton aria-label="add to favorites" onClick={handleAddTVToFavorites}>
            <FavoriteIcon color="primary" fontSize="large" />
=======
        <IconButton aria-label="add to favorites" onClick={handleAddToTVFavorites}>
            <FavoriteTVIcon color="primary" fontSize="large" />
>>>>>>> Stashed changes
        </IconButton>
    );
};

export default AddToTVFavoritesIcon;