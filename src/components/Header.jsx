import { Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MobileMenu from "./MobileMenu";

const useStyle = makeStyles((theme) => ({
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
    justifyContent: "flex-start",
    alignItems: "center",
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
      background: "red",
    },
  },
}));

const Header = () => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.top_bar}>
          <div className={classes.left}>
            <MobileMenu />
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
          <div className="">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Language
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>Spanish</MenuItem>  
            </Menu>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
