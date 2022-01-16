import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  paper: {
    width: 250,
  },
  menu_item: {
    // color: "#fff !important",
    padding: "20px 20px !important",
    borderBottom: "1px solid #eee !important",
    color: "#000 !important",
    "& a": {
      color: "#000",
      textDecoration: "none",
    },
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
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link to="/">Home</Link>
            </Button>

            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <a href="#"></a>
              <Link to="/about-us">About Us</Link>
            </Button>
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
