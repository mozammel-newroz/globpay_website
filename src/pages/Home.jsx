import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

import Banner from "../components/Banner";
import FaqHome from "../components/FaqHome";

const useStyle = makeStyles((theme) => ({
  wrapper1: {
    background: "#FBFAFD",
    position: "relative",

    marginTop: "100px !important",
    padding: 30,
    left: 12,
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
    [theme.breakpoints.down("md")]: {
      marginBottom: 50,
    },
  },
  w2_title: {
    textAlign: "center",
    margin: "60px 0px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem !important",
    },
  },
  w2__box: {
    background: "#F1FBFF",
    padding: 30,
    borderRadius: 30,
    transition: "margin-top 0.2s ease",
    position: "relative",

    "&:hover": {
      boxShadow: "5px 10px 28px #ddd",
      border: "15px solid #fff",
      padding: 15,
      marginTop: 15,
    },
  },
  w3_number: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  number: {
    fontSize: "4rem !important",
    color: "#C6F0DD !important",
    fontWeight: "600 !important",
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
  // w3_title: {
  //   marginBottom: "20px !important",
  // },
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
    marginBottom: "20px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem !important",
    },
  },
  w3_subtitle: {
    marginBottom: "20px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.8rem !important",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem !important",
    },
  },
  w4_left_img: {
    position: "relative",
    top: 19,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem !important",
    },
  },

  w5_subtitle: {
    textAlign: "center",
    marginBottom: "70px !important",
  },
  w5_box: {
    "&:hover": {
      backgroundImage: "linear-gradient(#F0FBFF, #fff)",
      "& $w5_img": {
        background: "rgba(92, 199, 76, 0.5)",
      },
    },
  },
  w5_img: {
    height: 50,
    width: 50,
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
    borderRadius: "50%",
  },
  w5_title: {
    marginBottom: "20px !important",
  },
  w5_text: {},

  w5_one: {
    borderRight: "1px solid #E7EDF5",
    borderBottom: "1px solid #E7EDF5",
    padding: "0px 60px 60px 5px",
    [theme.breakpoints.down("md")]: {
      padding: 10,
      borderBottom: "0px solid #E7EDF5",
    },
  },
  w5_two: {
    borderRight: "1px solid #E7EDF5",
    borderBottom: "1px solid #E7EDF5",
    padding: "0px 30px 60px 60px",
    [theme.breakpoints.down("md")]: {
      padding: 10,
      borderBottom: "0px solid #E7EDF5",
    },
  },
  w5_three: {
    borderBottom: "1px solid #E7EDF5",
    padding: "0px 5px 60px 60px",
    [theme.breakpoints.down("md")]: {
      padding: 10,
      borderBottom: "0px solid #E7EDF5",
    },
  },
  w5_four: {
    borderRight: "1px solid #E7EDF5",
    padding: "30px 30px 60px 5px",
    [theme.breakpoints.down("md")]: {
      padding: 10,
      borderRight: "0px solid #E7EDF5",
    },
  },
  w5_five: {
    borderRight: "1px solid #E7EDF5",
    padding: "30px 30px 60px 60px",
    [theme.breakpoints.down("md")]: {
      padding: 10,
      borderRight: "1px solid #E7EDF5",
    },
  },
  w5_six: {
    padding: "30px 5px 60px 60px",
    [theme.breakpoints.down("md")]: {
      padding: 10,
    },
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
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem !important",
    },
  },
  w6_inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    "& div": {
      flex: 1,
      [theme.breakpoints.down("md")]: {
        // background: "red",
        width: "90%",
      },
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
  wrapper7: {
    margin: "90px 0px",
  },
  w7_header: {
    textAlign: "center",
    marginBottom: "40px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem !important",
    },
  },
}));

const Home = () => {
  const classes = useStyle();
  return (
    <div>
      <Banner />
      <Container maxWidth="lg">
        <Grid container className={classes.wrapper1} spacing={3}>
          <Grid item md={4} sm={12}>
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

          <Grid item md={4} sm={12}>
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

          <Grid item md={4}>
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
          <Grid item md={12}>
            <Typography variant="h2" className={classes.w2_title}>
              Getting Started is easy!
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.wrapper2} spacing={6}>
          <Grid item md={4}>
            <div className={classes.w2__box}>
              <img src="/images/register.png" alt="" />
              <div className={classes.w3_number}>
                <Typography className={classes.number}>1</Typography>
              </div>

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
          <Grid item md={4}>
            <div className={classes.w2__box}>
              <img src="/images/verify.png" alt="" />
              <div className={classes.w3_number}>
                <Typography className={classes.number}>2</Typography>
              </div>

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
          <Grid item md={4}>
            <div className={classes.w2__box}>
              <img src="/images/start.png" alt="" />
              <div className={classes.w3_number}>
                <Typography className={classes.number}>3</Typography>
              </div>

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
            <Grid item md={6}>
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
            <Grid item md={6}>
              <div className={classes.w3_box}>
                <div className="">
                  <img
                    src="/images/bank.png"
                    className={classes.w3_img}
                    alt=""
                  />
                </div>
                <div className="">
                  <Typography variant="h4" className={classes.w3_subtitle}>
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
                  <Typography variant="h4" className={classes.w3_subtitle}>
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
                  <Typography variant="h4" className={classes.w3_subtitle}>
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
          <Grid item md={12}>
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
            <Grid item md={12}>
              <Typography variant="h2" className={classes.w5_header}>
                Globpay is safe and secure
              </Typography>
              <Typography variant="body1" className={classes.w5_subtitle}>
                Get paid instantly in Pakistan from your international
                customers. Share <br /> payment link via SMS, WhatsApp or by
                email.
              </Typography>
            </Grid>
            <Grid item md={4}>
              <div className={`${classes.w5_box} ${classes.w5_one}`}>
                <div className={classes.w5_img}>
                  <img src="/images/kyc.png" alt="" />
                </div>
                <Typography variant="h4" className={classes.w5_title}>
                  KYC Verification
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Get paid instantly with Payment Links. Let your customers pay
                  online without having an App
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={`${classes.w5_box} ${classes.w5_two}`}>
                <div className={classes.w5_img}>
                  <img src="/images/2fector.png" alt="" />
                </div>
                <Typography variant="h4" className={classes.w5_title}>
                  2 factor Authentication
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Become a Merchant and start accepting international Payments
                  from anywhere into Pakistan
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={`${classes.w5_box} ${classes.w5_three}`}>
                <div className={classes.w5_img}>
                  <img src="/images/search_icon.png" alt="" />
                </div>
                <Typography variant="h4" className={classes.w5_title}>
                  Regular Audits
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Accept Payment via Visa, Master Card, EasyPaisa, UPaisa & Net
                  Banking in Pakistan
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={`${classes.w5_box} ${classes.w5_four}`}>
                <div className={classes.w5_img}>
                  <img src="/images/world.png" alt="" />
                </div>
                <Typography variant="h4" className={classes.w5_title}>
                  Monitored around the world
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Use our Payment Page to accept local and international
                  payments without having your own website
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={`${classes.w5_box} ${classes.w5_five}`}>
                <div className={classes.w5_img}>
                  <img src="/images/safe_icon.png" alt="" />
                </div>
                <Typography variant="h4" className={classes.w5_title}>
                  Safe Guard with banks
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  We provide Payment SDK for Android, iOS and Web. Integrate
                  your own App or website to accept payments.
                </Typography>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={`${classes.w5_box} ${classes.w5_six}`}>
                <div className={classes.w5_img}>
                  <img src="/images/anti.png" alt="" />
                </div>
                <Typography variant="h4" className={classes.w5_title}>
                  Anti fraud protection
                </Typography>
                <Typography variant="body1" className={classes.w5_text}>
                  Create, Copy and Collect With Payment Button. Collect Onetime
                  or Subscription Payments & more
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.wrapper6}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={12}>
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
      <Container maxWidth="lg" className={classes.wrapper7}>
        <Grid container>
          <Grid item md={12}>
            <Typography variant="h2" className={classes.w7_header}>
              Frequently Asked Questions
            </Typography>
            <FaqHome />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
