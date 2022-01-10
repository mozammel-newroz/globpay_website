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
    marginBottom: "20px !important",
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
    padding: "90px 0px",
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
  wrapper4: {
    backgroundImage: "url('/images/bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "#F6FEF7",
    borderRadius: 30,
    padding: 10,
    display: "flex",
    alignItems: "center",
    margin: "120px 0px",
  },
  w4_title: {
    marginBottom: "20px !important",
  },
  w4_left_img: {
    position: "relative",
    top: 19,
  },
  w4_right: {
    padding: 20,
  },
  w4_store: {
    marginTop: 30,
    "& img": {
      marginRight: 10,
    },
  },
  wrapper5: {
    background: "#F0FBFF",
    padding: "90px 0px",
  },
  w5_header: {
    textAlign: "center",
    marginBottom: "20px !important",
  },

  w5_subtitle: {
    textAlign: "center",
    marginBottom: "70px !important",
  },
  w5_box: {
    "&:hover": {
      backgroundImage: "linear-gradient(#F0FBFF, #fff)",
    },
  },
  w5_img: {
    marginBottom: 20,
  },
  w5_title: {
    marginBottom: "20px !important",
  },
  w5_text: {},

  w5_one: {
    borderRight: "1px solid #E7EDF5",
    borderBottom: "1px solid #E7EDF5",
    padding: "0px 60px 60px 5px",
  },
  w5_two: {
    borderRight: "1px solid #E7EDF5",
    borderBottom: "1px solid #E7EDF5",
    padding: "0px 30px 60px 60px",
  },
  w5_three: {
    borderBottom: "1px solid #E7EDF5",
    padding: "0px 5px 60px 60px",
  },
  w5_four: {
    borderRight: "1px solid #E7EDF5",
    padding: "30px 30px 60px 5px",
  },
  w5_five: {
    borderRight: "1px solid #E7EDF5",
    padding: "30px 30px 60px 60px",
  },
  w5_six: {
    padding: "30px 5px 60px 60px",
  },
  wrapper6: {
    background: "#FBFAFD",
    backgroundImage: "url('/images/bg2.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    padding: "90px 0px",
  },
  w6_header: {
    textAlign: "center",
    marginBottom: "40px !important",
  },
  w6_inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      flex: 1,
    },
  },
  w6_flag: {
    display: "flex",
    height: 100,
    background: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 15px",
    boxShadow: "3px 3px 25px #eee",
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
              <img src="/images/verify.png" alt="" />

              <Typography variant="h4" className={classes.w2_head}>
                Verify you identity
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
              <img src="/images/start.png" alt="" />

              <Typography variant="h4" className={classes.w2_head}>
                Start sending
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

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <div className={classes.wrapper4}>
              <div>
                <img
                  src="/images/phone.png"
                  alt=""
                  className={classes.w4_left_img}
                />
              </div>
              <div className={classes.w4_right}>
                <Typography variant="h2" className={classes.w4_title}>
                  And its all at your finger tips
                </Typography>
                <Typography variant="body1">
                  Globpay offers very simple and quick way to accept payments
                  from your customers with NO CODE. You can send Instant
                  Payment. Generate Invoices with globPay Merchant Portal.
                </Typography>
                <div className={classes.w4_store}>
                  <img src="/images/google_play.png" alt="" />
                  <img src="/images/apple_store.png" alt="" />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.wrapper5}>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item lg={12}>
              <Typography variant="h2" className={classes.w5_header}>
                Globpay is safe and secure
              </Typography>
              <Typography variant="body1" className={classes.w5_subtitle}>
                Get paid instantly in Pakistan from your international
                customers. Share <br /> payment link via SMS, WhatsApp or by
                email.
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <div className={`${classes.w5_box} ${classes.w5_one}`}>
                <img
                  src="/images/search.png"
                  alt=""
                  className={classes.w5_img}
                />
                <Typography variant="h4" className={classes.w5_title}>
                  KYC Verification
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Get paid instantly with Payment Links. Let your customers pay
                  online without having an App
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className={`${classes.w5_box} ${classes.w5_two}`}>
                <img
                  src="/images/search.png"
                  alt=""
                  className={classes.w5_img}
                />
                <Typography variant="h4" className={classes.w5_title}>
                  2 factor Authentication
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Get paid instantly with Payment Links. Let your customers pay
                  online without having an App
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className={`${classes.w5_box} ${classes.w5_three}`}>
                <img
                  src="/images/search.png"
                  alt=""
                  className={classes.w5_img}
                />
                <Typography variant="h4" className={classes.w5_title}>
                  Regular Audits
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Get paid instantly with Payment Links. Let your customers pay
                  online without having an App
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className={`${classes.w5_box} ${classes.w5_four}`}>
                <img
                  src="/images/search.png"
                  alt=""
                  className={classes.w5_img}
                />
                <Typography variant="h4" className={classes.w5_title}>
                  Monitored around the world
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Get paid instantly with Payment Links. Let your customers pay
                  online without having an App
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className={`${classes.w5_box} ${classes.w5_five}`}>
                <img
                  src="/images/search.png"
                  alt=""
                  className={classes.w5_img}
                />
                <Typography variant="h4" className={classes.w5_title}>
                  Safe Guard with banks
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Get paid instantly with Payment Links. Let your customers pay
                  online without having an App
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className={`${classes.w5_box} ${classes.w5_six}`}>
                <img
                  src="/images/search.png"
                  alt=""
                  className={classes.w5_img}
                />
                <Typography variant="h4" className={classes.w5_title}>
                  Anti fraud protection
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Get paid instantly with Payment Links. Let your customers pay
                  online without having an App
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.wrapper6}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item lg={12}>
              <Typography variant="h2" className={classes.w6_header}>
                Send money to over 12 countries world wide
              </Typography>
              <div className={classes.w6_inner}>
                <div>
                  <div className={classes.w6_flag}>
                    <img src="/images/canada.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={classes.w6_flag}>
                    <img src="/images/bangladesh.png" alt="" />
                  </div>
                  <div className={classes.w6_flag}>
                    <img src="/images/bhutan.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={classes.w6_flag}>
                    <img src="/images/malaysia.png" alt="" />
                  </div>
                  <div className={classes.w6_flag}>
                    <img src="/images/india.png" alt="" />
                  </div>
                  <div className={classes.w6_flag}>
                    <img src="/images/pakistan.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={classes.w6_flag}>
                    <img src="/images/brazil.png" alt="" />
                  </div>
                  <div className={classes.w6_flag}>
                    <img src="/images/uk.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={classes.w6_flag}>
                    <img src="/images/china.png" alt="" />
                  </div>
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
