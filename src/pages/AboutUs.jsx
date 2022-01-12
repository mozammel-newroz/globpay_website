import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, maxWidth } from "@mui/system";
import React from "react";
import Header from "../components/Header";

const useStyle = makeStyles((theme) => ({
  banner: {
    backgroundImage: "linear-gradient(to top right, #ECFBEF, #FCFEFC, #E3F6FE)",
    height: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "10px 0px",
  },
  banner_left: {
    display: "flex",
  },
  banner_title: {
    marginBottom: "30px !important",
  },
  banner_text: {
    marginBottom: "20px !important",
  },
  banner_img: {
    marginRight: 20,
  },
  banner_bg: {
    backgroundImage: "url('/images/about_map.png')",
    height: "100%",
    position: "relative",
    right: 0,
  },
  wrapper11: {
    margin: "130px 0px 90px 0px",
  },
  w11_box: {
    padding: 60,
    background: "#F6FEF7",
    borderRadius: 15,
    marginRight: 30,
  },
  w111_box: {
    padding: 60,
    background: "#F0FBFF",
    borderRadius: 15,
    position: "relative",
    top: -50,
    marginLeft: 30,
  },
  w11_title: {
    margin: "20px 0px !important",
    textAlign: "center",
  },
  w11_text: {
    textAlign: "center",
    marginBottom: "30px !important",
  },
  w11_img: {
    textAlign: "center",
    "& img": {
      maxWidth: "100%",
    },
  },
  wrapper12: {
    background: "#FBFAFD",
    padding: "90px 0px",
  },
  w12_title: {},
  w12_subtitle: {},
}));

const AboutUs = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.banner}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item md={6}>
              <div className={classes.banner_left}>
                <div>
                  <img
                    src="/images/story.png"
                    alt=""
                    className={classes.banner_img}
                  />
                </div>
                <div>
                  <Typography variant="h2" className={classes.banner_title}>
                    Globpay Story
                  </Typography>
                  <Typography variant="body1" className={classes.banner_text}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.Amet
                    minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint.
                  </Typography>
                  <Typography variant="body1" className={classes.banner_text}>
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.Amet minim mollit non
                    deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className={classes.banner_bg}></div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container maxWidth="lg" className={classes.wrapper11}>
        <Grid container spacing={3}>
          <Grid item md="6">
            <div className={classes.w11_box}>
              <div className={classes.w11_img}>
                <img src="/images/leadership.png" alt="" />
              </div>
              <Typography variant="h3" className={classes.w11_title}>
                Meet the Leadership team
              </Typography>
              <Typography variant="body1" className={classes.w11_text}>
                For instance, a sensor is used to measure the eye position
                around 4000 times per second. The laser is redirected to make
                precise incisions in order to around 4000 times per second. The
                laser is redirected to make precise incisions in order to
              </Typography>
            </div>
          </Grid>
          <Grid item md="6">
            <div className={classes.w111_box}>
              <Typography variant="h3" className={classes.w11_title}>
                Press
              </Typography>
              <Typography variant="body1" className={classes.w11_text}>
                For instance, a sensor is used to measure the eye position
                around 4000 times per second. The laser is redirected to make
                precise incisions in order to around 4000 times per second.
              </Typography>
              <div className={classes.w11_img}>
                <img src="/images/press.png" alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.wrapper12}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Typography variant="body2" className={classes.w12_subtitle}>What we believe</Typography>
              <Typography variant="h2" className={classes.w12_title}>Values to live by</Typography>
            </Grid>
            <Grid item md={6}>
              <div className={classes.w12_box}>
                <img src="/images/respect.png" alt="" />
                <Typography variant="h4" className={classes.w12_box_title}>Respect</Typography>
                <Typography variant="body1" className={classes.w12_text} >
                  For instance, a sensor is used to measure the eye position
                  around 4000 times per second. The laser is redirected to make
                  precise incisions in order to For instance, a sensor is used
                  to measure the eye position around 4
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
