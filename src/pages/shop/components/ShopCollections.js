import React from "react";
import { useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import useStyles from "../styles";
import { addCart } from "../../../redux/cart/cart.action";

function ShopCollections({ item }) {
  const dispatch = useDispatch();
  const { name, imageUrl, price, wish } = item;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} title={name} />
        <CardContent>
          <Typography component="h2">{name.toLowerCase()}</Typography>
          <Typography component="h2">
            Lizards are a widespread group of desquamate reptiles, with over
            6,000 species,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Button color="primary" onClick={() => dispatch(addCart(item))}>
          Add To Bag
        </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={`${wish ? "secondary" : ""}`} />
        </IconButton>

        <Typography component="h2">${price}</Typography>
      </CardActions>
    </Card>
  );
}

export default ShopCollections;
