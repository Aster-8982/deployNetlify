import { Box, makeStyles, Typography } from "@material-ui/core";
import home from "../../images/home/home.png";
import React from "react";
import Slider from "./Slider";
import Services from "./Services";

const useStyles = makeStyles({
  Img: {
    width: "100%",
    height: "70vh",
    marginTop: "0.8rem",
  },
  ImgText: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.3rem",
    marginTop: "1rem",
    // textDecoration: "underline",
    opacity: 0.7,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <img src={home} alt="home" className={classes.Img} />
        <Typography className={classes.ImgText}>lorem ipsum dolor</Typography>
      </Box>
      <Slider title="Products" />
      <Services text="Neque porro quisquam est qui dolorem ipsum quia dolor sit " />
      <Slider title="Portfolio/ Case Studies" />
      <Slider title="Developer On Demand" />
    </Box>
  );
}

export default Home;
