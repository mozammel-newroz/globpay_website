import React from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  form_title: {
    marginBottom: "30px !important",
  },
  wrapper: {
    background: "#FBFAFD",
    padding: "60px 0px !important",
  },
  label: {
    marginTop: "20px !important",
    marginBottom: "10px !important",
  },
  select: {
    background: "#fff !important",
  },
  form: {
    padding: "25px 0px !important",
  },
  button: {
    color: "#fff !important",
    marginTop: "40px !important",
    padding: "15px 25px !important",
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
              <div className={classes.form}>
                <Typography variant="h4" className={classes.form_title}>
                  Submit a request
                </Typography>

                <FormControl fullWidth>
                  <Typography variant="body1" className={classes.label}>
                  What can we help you with?
                  </Typography>
                  <Select
                    className={classes.select}

                    // value={age}

                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <Typography variant="body1" className={classes.label}>
                  What kind of issue you are having with sending money?
                  </Typography>
                  <Select
                    // value={age}

                    // onChange={handleChange}
                    className={classes.select}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <Typography variant="body1" className={classes.label}>
                  Subject
                  </Typography>
                  <TextField variant="outlined" className={classes.select} />
                </FormControl>
                <FormControl fullWidth>
                  <Typography variant="body1" className={classes.label}>
                  Description
                  </Typography>
                  <TextField multiline rows={4} className={classes.select} />
                </FormControl>
                <FormControl fullWidth>
                  <Typography variant="body1" className={classes.label}>
                  Transaction ID
                  </Typography>
                  <TextField variant="outlined" className={classes.select} />
                </FormControl>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                >
                  Submit Request
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
