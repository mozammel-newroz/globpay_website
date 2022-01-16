import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FaqOthers from "../components/FaqOthers";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "#FBFAFD",
    padding: "60px 0px",
  },
  title: {
    margin: "30px 0px !important",
    textAlign: "center",
  },
  search: {
    padding: "15px 5px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    boxShadow: "1px 3px 6px #eee",
    borderRadius: 15,
  },
  title1: {
    margin: "60px 0px  30px 0px !important",
  },
  title2: {
    margin: "20px 0px  !important",
  },
  box: {
    background: "#fff",
    padding: 25,
    borderRadius: 15,
    boxShadow: "1px 3px 6px #eee",
    textAlign: "center",
    marginTop: 5,
    cursor: "pointer",
    "&:hover": {
      marginTop: 0,
      borderTop: "5px solid #49C755",
    },
  },
  title3: {
    margin: "20px 0px !important",
  },
  wrapper2: {
    background: "#fff",
    padding: "90px 0px",
  },
  title4: {
    textAlign: "center",
    marginBottom: "20px !important",
  },
  subtitle4: {
    textAlign: "center",
    fontWeight: "400 !important",
    color: "#666",
    marginBottom: "60px !important",
  },
  text4: {
    marginTop: "15px !important",
  },
  center: {
    textAlign: "center",
  },
  link: {
    color: "#000",
  },
}));

const Faq = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h3" className={classes.title}>
                Hi, How can we help?
              </Typography>

              <div className={classes.search}>
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon style={{ fontSize: "2.2rem" }} />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1, fontSize: "1.4rem" }}
                  placeholder="Search for your issues"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </div>
              <Typography variant="h3" className={classes.title1}>
                Popular Tropics
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item md={4} sm={4} xs={12}>
              <div className={classes.box}>
                <img src="/images/send_money.png" alt="" />
                <Typography variant="h4" className={classes.title2}>
                  Sending Money
                </Typography>
              </div>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <div className={classes.box}>
                <img src="/images/receiving_money.png" alt="" />
                <Typography variant="h4" className={classes.title2}>
                  Receiving Money
                </Typography>
              </div>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <div className={classes.box}>
                <img src="/images/account.png" alt="" />
                <Typography variant="h4" className={classes.title2}>
                  Account
                </Typography>
              </div>
            </Grid>
            <Grid item md={12}>
              <Typography variant="h4" className={classes.title3}>
                Common issues
              </Typography>
              <FaqOthers />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.wrapper2}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h2" className={classes.title4}>
                Can't find what you are <br /> looking for?
              </Typography>
              <Typography variant="h4" className={classes.subtitle4}>
                Other wats to contact us
              </Typography>
            </Grid>
            <Grid item md={4} sm={4} xs={12} className={classes.center}>
              <img src="/images/chat.png" alt="" />
              <Typography variant="h4" className={classes.text4}>
                Chat
              </Typography>
            </Grid>
            <Grid item md={4} sm={4} xs={12} className={classes.center}>
              <Link to="/contact-us" className={classes.link}>
                <img src="/images/resoluton.png" alt="" />
                <Typography variant="h4" className={classes.text4}>
                  Resolution
                </Typography>
              </Link>
            </Grid>
            <Grid item md={4} sm={4} xs={12} className={classes.center}>
              <img src="/images/call.png" alt="" />
              <Typography variant="h4" className={classes.text4}>
                Call
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Faq;
