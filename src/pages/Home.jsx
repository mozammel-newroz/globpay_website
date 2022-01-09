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
    // marginBottom: "100px !important",
    minHeight: 550,
  },
  w2_title: {
    textAlign: "center",
    margin: "60px 0px !important",
  },
  w2__box: {
    background: "#F1FBFF",
    padding: 30,
    borderRadius: 30,
    transition: "margin-top 0.2s ease",

    "&:hover": {
      boxShadow: "5px 10px 28px #ddd",
      border: "15px solid #fff",
      padding: 15,
      marginTop: 15,
    },
  },
  w2_head: {
    marginTop: "20px !important",
  },
  w2_text: {
    marginTop: "20px !important",
  },
  wrapper3: {
    background: "#FBFAFD",
    padding: '90px 0px'
  },
  w3_title: {
    marginBottom: "20px !important",
  },
  w3_text: {
    marginBottom: "20px !important",
  },
  w3_box: {
    display: "flex",
    marginBottom: 30,
  },
  w3_img: {
    marginRight: 25,
  },
  w3_title: {
    marginBottom: "15px !important",
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

        <Grid container spacing={0}>
          <Grid item lg={12}>
            <Typography variant="h2" className={classes.w2_title}>
              Getting Started is easy!
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.wrapper2} spacing={6}>
          <Grid item lg={4}>
            <div className={classes.w2__box}>
              <img src="/images/register.png" alt="" />

              <Typography variant="h4" className={classes.w2_head}>
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

              <Typography variant="h4" className={classes.w2_head}>
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

              <Typography variant="h4" className={classes.w2_head}>
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

      <div className={classes.wrapper3}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item lg={6}>
              <Typography variant="h2" className={classes.w3_title}>
                A variety of ways <br /> to send & reacived money
              </Typography>
              <Typography variant="body1" className={classes.w3_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quisquam adipisci beatae, id error fugit animi
                possimus amet velit aut dolore eaque reprehenderit iste
                blanditiis? Voluptas molestias beatae atque rem!
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quisquam adipisci beatae, id error fugit animi
                possimus amet velit aut dolore eaque reprehenderit iste
                blanditiis? Voluptas molestias beatae atque rem!
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <div className={classes.w3_box}>
                <div className="">
                  <img
                    src="/images/bank.png"
                    className={classes.w3_img}
                    alt=""
                  />
                </div>
                <div className="">
                  <Typography variant="h4" className={classes.w3_title}>
                    Bank Transfer
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, saepe architecto! Quo iusto ratione est id dolorem
                    ad iste dolorum
                  </Typography>
                </div>
              </div>
              <div className={classes.w3_box}>
                <div className="">
                  <img
                    src="/images/mfs.png"
                    className={classes.w3_img}
                    alt=""
                  />
                </div>
                <div className="">
                  <Typography variant="h4" className={classes.w3_title}>
                    MFS
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, saepe architecto! Quo iusto ratione est id dolorem
                    ad iste dolorum
                  </Typography>
                </div>
              </div>
              <div className={classes.w3_box}>
                <div className="">
                  <img
                    src="/images/cash.png"
                    className={classes.w3_img}
                    alt=""
                  />
                </div>
                <div className="">
                  <Typography variant="h4" className={classes.w3_title}>
                    Cash Pickup
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, saepe architecto! Quo iusto ratione est id dolorem
                    ad iste dolorum
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
