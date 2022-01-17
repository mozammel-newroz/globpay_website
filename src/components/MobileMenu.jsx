import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import RateReviewIcon from '@mui/icons-material/RateReview';
import DvrIcon from "@mui/icons-material/Dvr";
import { List, Typography } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  paper: {
    width: 250,
    display: "flex",
    justifyContent: "flex-start",
  },
  menu_item: {
    // color: "#fff !important",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    padding: "20px 20px !important",
    borderBottom: "1px solid #eee !important",
    color: "#000 !important",
    "& a": {
      color: "#000",
      textDecoration: "none",
    },
  },
  link_icon: {
    marginRight: 10,
  },
  menu_icon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menu_icon_image: {
    [theme.breakpoints.down("sm")]: {
      // width: "30PX",
      // margin: 0,
      // padding: 0
    },
  },
  icon: {
    color: "#666",
    fontSize: 50,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function MobileMenu() {
  const classes = useStyle();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={classes.menu_icon}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {/* <MenuIcon className={classes.icon} /> */}
              {/* <img src={menu_icon} className={classes.menu_icon_image} alt="" /> */}
              <MenuIcon style={{ fontSize: 45, marginRight: 0 }} />
            </Button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            classes={{ paper: classes.paper }}
            // style={{ background: "red" }}
          >
            <List
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <HomeIcon className={classes.link_icon} />
              <Link to="/">
                <Typography variant="body2">Home</Typography>
              </Link>
            </List>

            <List
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <DvrIcon className={classes.link_icon} />
              <Link to="/about-us">
                <Typography variant="body2">About Us</Typography>
              </Link>
            </List>
            <List
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <RateReviewIcon className={classes.link_icon} />
              <Link to="/contact-us">
                <Typography variant="body2">Contact Us</Typography>
              </Link>
            </List>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
