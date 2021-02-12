import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import useStyles from "../styles";

function HomeView({ title, imageUrl, linkUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`${linkUrl}`}>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent>
          <Typography component="h2">{title}</Typography>
          <Typography component="h2">
            Lizards are a widespread group of desquamate reptiles, with over
            6,000 species, ranging Lizards are a widespread group of squamose
            reptiles, with over 6,000 species, ranging
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default HomeView;
