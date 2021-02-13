import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles";
import ShopCollections from "./ShopCollections";

function ShopItem({ title, items }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {items
          .filter((_, idx) => idx < 4)
          .map(item => (
            <Grid item key={item.id} xs={12} md={3} lg={3}>
              <ShopCollections item={item} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default ShopItem;
