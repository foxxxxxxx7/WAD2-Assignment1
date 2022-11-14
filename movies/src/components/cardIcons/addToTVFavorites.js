import React, { useContext } from "react";
import { TVContext } from "../../contexts/TVContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTVFavoritesIcon = ({ tv }) => {
    const context = useContext(TVContext);

    const handleAddToFavorites = (e) => {
        e.preventDefault();
        context.addToFavorites(tv);
    };

    return (
        <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
            <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToTVFavoritesIcon;