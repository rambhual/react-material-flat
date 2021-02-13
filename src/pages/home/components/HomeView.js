import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles";

function HomeView({ title, imageUrl, linkUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`${linkUrl}`}>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent>
          <Typography component="h2">{title.toLowerCase()}</Typography>
          <Typography component="h2">
            Lizards are a widespread group of desquamate reptiles, with over
            6,000 species,
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HomeView;
