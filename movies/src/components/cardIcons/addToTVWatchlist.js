import React, { useContext } from "react";
import { TVContext } from "../../contexts/TVContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToTVWatchlistIcon = ({ tv }) => {
  const context = useContext(TVContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(tv);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTVWatchlistIcon;