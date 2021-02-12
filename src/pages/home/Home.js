import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import HomeView from "./components/HomeView";

export default function HomePage() {
  const { sections } = useSelector(state => state.home);
  return (
    <>
      <PageTitle title="Home Page" />
      <Grid container spacing={1}>
        {sections.map(section => (
          <Grid item xs={12} md={3} key={section.id}>
            <HomeView {...section} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
