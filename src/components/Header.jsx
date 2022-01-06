import { Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  root: {
    // background: "#eee",
  },
  top_bar: {
    overflow: "hidden",
    display: "block",
    marginBottom: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 85,
  },
  left: {
    display: "flex",
    // justifyContent: "center",
  },
  menu_item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
    "&  li": {
      padding: 20,
      display: "inline-block",
    },
    "& a": {
      textDecoration: "none",
    },
  },
});

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.top_bar}>
          <div className={classes.left}>
            <img src="/images/logo.png" alt="" />
            <ul className={classes.menu_item}>
              <li>
                <Link to="/">
                  <Typography variant="body2">Home</Typography>
                </Link>
              </li>
              <li>
                <Link to="/about-us">
                  <Typography variant="body2">About Us</Typography>
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  <Typography variant="body2">Contact Us</Typography>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">language</div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
