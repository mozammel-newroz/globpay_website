import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

import Banner from "../components/Banner";

const useStyle = makeStyles({
  wrapper1: {
    background: "#FBFAFD",
    position: "relative",
    marginTop: "100px !important",
    padding: 30,
    borderRadius: 30,
    boxShadow: "1px 1px 3px 1px #eee",
  },
  w1_head: {
    marginTop: "15px !important",
  },
  w1_text: {
    marginTop: "20px !important",
  },
  wrapper2: {
    marginTop: "100px !important",
  },
  w2_title: {
    textAlign: "center",
    marginBottom: "20px !important",
  },
  w2__box: {
    background: "#F1FBFF",
  },
});

const Home = () => {
  const classes = useStyle();
  return (
    <div>
      <Banner />
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper1} spacing={3}>
          <Grid item lg={4}>
            <img src="/images/low_cost.png" alt="" />
            <Typography variant="h3" className={classes.w1_head}>
              Low cost
            </Typography>
            <Typography variant="body1" className={classes.w1_text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Grid>

          <Grid item lg={4}>
            <img src="/images/fast.png" alt="" />
            <Typography variant="h3" className={classes.w1_head}>
              Low cost
            </Typography>
            <Typography variant="body1" className={classes.w1_text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Grid>

          <Grid item lg={4}>
            <img src="/images/safe.png" alt="" />
            <Typography variant="h3" className={classes.w1_head}>
              Low cost
            </Typography>
            <Typography variant="body1" className={classes.w1_text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.wrapper2} spacing={3}>
          <Grid item lg={12} >
            <Typography variant="h2" className={classes.w2_title}>
              Getting Started is easy!
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <div className={classes.w2__box}>
              <img src="/images/register.png" alt="" />

              <Typography variant="h3" className={classes.w2_head}>
                Register
              </Typography>
              <Typography variant="body1" className={classes.w2_text}>
                Sed laoreet euismod arcu felis, volutpat. Ornare habitant arcu
                auctor amet sit nulla. Enim, ac, purus ac pretium. Sit tellus
                felis ut et feugiat pellentesque facilisi aliquam arcu.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className={classes.w2__box}>
              <img src="/images/register.png" alt="" />

              <Typography variant="h3" className={classes.w2_head}>
                Register
              </Typography>
              <Typography variant="body1" className={classes.w2_text}>
                Sed laoreet euismod arcu felis, volutpat. Ornare habitant arcu
                auctor amet sit nulla. Enim, ac, purus ac pretium. Sit tellus
                felis ut et feugiat pellentesque facilisi aliquam arcu.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className={classes.w2__box}>
              <img src="/images/register.png" alt="" />

              <Typography variant="h3" className={classes.w2_head}>
                Register
              </Typography>
              <Typography variant="body1" className={classes.w2_text}>
                Sed laoreet euismod arcu felis, volutpat. Ornare habitant arcu
                auctor amet sit nulla. Enim, ac, purus ac pretium. Sit tellus
                felis ut et feugiat pellentesque facilisi aliquam arcu.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
