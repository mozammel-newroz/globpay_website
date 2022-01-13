import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyle = makeStyles((theme) => ({
  banner: {
    backgroundImage: "linear-gradient(to top right, #ECFBEF, #FCFEFC, #E3F6FE)",
    height: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  banner_title: {
    marginBottom: "30px !important",
    textAlign: "center",
  },
  banner_text: {
    textAlign: "center",
    fontWeight: "400 !important",
    color: "#666 !important",
  },
  wrapper: {
    background: "#FBFAFD",
    padding: "60px 0px !important",
  },
}));

const ContactUs = () => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.banner}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item md={12}>
              <div className={classes.banner_inner}>
                <Typography variant="h1" className={classes.banner_title}>
                  Resolution Center
                </Typography>
                <Typography variant="body2" className={classes.banner_text}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat su
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.wrapper}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item md={12}>
              <div className={classes.banner_inner}>
                <Typography variant="h4" className={classes.banner_title}>
                  Submit a request
                </Typography>

                <FormControl sx={{ m: 1, minWidth: "100%  " }}>
                  <Typography variant="body2" >
                    Send Money
                  </Typography>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                  
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>With label + helper text</FormHelperText>
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
