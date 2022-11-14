import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { TVContext } from "../../contexts/TVContext";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';


export default function TVCard({ tv, action }) {
    // const { favorites, addToFavorites } = useContext(TVContext);
    // const { watchlist } = useContext(TVContext);

    // if (favorites.find((id) => id === tv.id)) {
    //     tv.favorite = true;
    // } else {
    //     tv.favorite = false
    // }
    // if (watchlist.find((id) => id === tv.id)) {
    //     tv.watchlist = true;
    // } else {
    //     tv.watchlist = false
    // }

    // const handleAddToFavorite = (e) => {
    //     e.preventDefault();
    //     addToFavorites(tv);
    // };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                // avatar={
                //     tv.favorite ? (
                //         <Avatar sx={{ backgroundColor: 'red' }}>
                //             <FavoriteIcon />
                //         </Avatar>
                //     ) : tv.watchlist ? (
                //         <Avatar sx={{ backgroundColor: 'green' }}>
                //             <PlaylistAddCheckIcon />
                //         </Avatar>
                //     ) : null
                // }
                title={
                    <Typography variant="h5" component="p">
                        {tv.title}{" "}
                    </Typography>
                }
            />
            <CardMedia
                sx={{ height: 500 }}
                image={
                    tv.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {tv.release_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {tv.vote_average}{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                {action(tv)}
                <Link to={`/tv/${tv.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info ...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}