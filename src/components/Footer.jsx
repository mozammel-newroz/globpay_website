import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
const useStyle =  makeStyles((theme) =>({
  root: {
    background: "#031404",
    color: "#fff",
  },
  wrapper: {
    padding: "90px 0px 40px 0px",
  },
  title: {
    color: "#fff !important",
    marginBottom: "20px !important",
  },
  text: {
    color: "#fff !important",
    fontSize: "0.9rem !important",
    marginBottom: "20px !important",
  },
  social: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down('md')]:{
      justifyContent: "flex-start",
		 },
  },
  icon_wrapper: {
    display: "flex",
  },
  icon: {
    background: "#fff",
    width: 32,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginRight: 15,
    "&:hover": {
      background: "rgba(92, 199, 76, 1)",
    },
  },
  bottom: {
    borderTop: "1px solid #283428",
    marginTop: "30px !important",
    paddingTop: "45px !important",
    display: "flex",
    justifyContent: "space-between",
    "& a": {
      textDecoration: "none",
    },
  },
  bottom_left: {
    display: "flex",
  },
  bottom_text: {
    marginRight: "30px !important",
    fontSize: "0.9rem !important",
    color: "#fff !important",
  },
  bottom_right: {
    fontSize: "0.9rem !important",
    color: "#fff !important",
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <div style={{ maxWidth: 300 }}>
              <img src="/images/logo.png" alt="" />
              <Typography className={classes.text}>
                By putting people first and never on quality, we were able to
                shape a team and your ideas.
              </Typography>
            </div>
          </Grid>
          <Grid item  md={3} xs={12}>
            <Typography variant="body2" className={classes.title}>
              Help & Support
            </Typography>
            <Typography className={classes.text}>Help</Typography>
            <Typography className={classes.text}>Contact Us</Typography>
            <Typography className={classes.text}>Report fraud</Typography>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Typography variant="body2" className={classes.title}>
              Products
            </Typography>

            <Typography className={classes.text}>About</Typography>
            <Typography className={classes.text}>Blog</Typography>
            <Typography className={classes.text}>Career</Typography>
            <Typography className={classes.text}>Investor</Typography>
          </Grid>
          <Grid item md={2} xs={12} className={classes.social}>
            <div>
              <Typography variant="body2" className={classes.title}>
                Follow Us
              </Typography>
              <div className={classes.icon_wrapper}>
                <a href="#">
                  <div className={classes.icon}>
                    <img src="/images/facebook.png" alt="" />
                  </div>
                </a>
                <a href="#">
                  <div className={classes.icon}>
                    <img src="/images/twitter.png" alt="" />
                  </div>
                </a>
                <a href="#">
                  <div className={classes.icon}>
                    <img src="/images/google.png" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className={classes.bottom}>
              <div className={classes.bottom_left}>
                <a href="#">
                  <Typography className={classes.bottom_text}>Legal</Typography>
                </a>
                <a href="#">
                  <Typography className={classes.bottom_text}>
                    Privacy policy
                  </Typography>
                </a>
              </div>
              <div className={classes.bottom_right}>
                <Typography className={classes.bottom_right}>
                  Copyright@ 2022 Dribbble. All rights reserved
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
