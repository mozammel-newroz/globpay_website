import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
const useStyle = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to top right, #ECFBEF, #FCFEFC, #E3F6FE)",
    position: "relative",
    // top: 24,
    marginTop: 24,
  },
  wrapper: {
    minHeight: "calc(100vh - 90px)",
    display: "flex",
    alignItems: "center",
  },
  low_cost_header: {
    position: "relative",
    display: "inline-block",
    width: 270,
    height: 90,
  },
  low_cost: {
    position: "absolute",
    top: 20,
    left: 0,
    width: 230,
    height: 65,
    background: "#00934A",
    transform: "rotate(-5deg)",
    padding: 12,
    fontSize: "3.2rem",
    borderRadius: 7,
    color: "#fff",
  },
  poly: {
    marginLeft: 40,
    position: "relative",
    top: 5,
  },
  poly2: {
    marginLeft: 40,
    position: "relative",
    top: 5,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  banner_text: {
    paddingTop: 30,
  },
  download: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    "& img": {
      marginRight: 15,
      [theme.breakpoints.down("sm")]: {
        width: "40%",
      },
    },
  },
  title: {
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem !important",
      lineHeight: "1.6 !important",
    },
  },
}));

const Banner = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.wrapper}>
          <Grid item md={8}>
            <Typography variant="h1" className={classes.title}>
              <span className={classes.low_cost_header}>
                <span className={classes.low_cost}>Low cost</span>
              </span>
              , Fast & <br /> Secure, Send money with Globpay
              <img src="/images/polygon.png" alt="" className={classes.poly} />
            </Typography>
            <Typography variant="body1" className={classes.banner_text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <div className={classes.download}>
              <img src="/images/google_play.png" alt="" />
              <img src="/images/apple_store.png" alt="" />
            </div>
          </Grid>
          <Grid item md={4}>
            <img
              src="/images/banner_right.png"
              alt=""
              className={classes.poly2}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
