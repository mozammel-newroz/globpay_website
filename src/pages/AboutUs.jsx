import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles({
  root: {
    color: "red",
  },
});

const AboutUs = () => {
  const classes = useStyle();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item lg={6} className={classes.root}>
          <Typography variant="h1" >Header</Typography>
          <Typography variant="h2" >Header</Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          consectetur architecto, veniam tenetur vel magni placeat quibusdam
          animi, numquam rerum quasi, iste doloribus deserunt dicta possimus id!
          Rem, nisi? Praesentium?
        </Grid>
        <Grid item lg={6}>
         <Typography>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas enim excepturi accusamus ipsam nihil incidunt impedit tenetur deserunt eveniet consequatur ea ducimus rerum praesentium aliquid possimus aliquam, ad quae.
         </Typography>

          <Button color="primary" >Click me</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
