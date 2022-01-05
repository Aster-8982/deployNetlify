import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import product1 from "../../images/product/bytequest_product_img1.png";
import product2 from "../../images/product/bytequest_product_img2.png";
import product3 from "../../images/product/bytequest_product_img3.png";

const useStyles = makeStyles({
  headText: {
    display: "flex",
    justifyContent: "center",
  },
  productImg: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "1rem",
  },
  ImgText: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.3rem",
    marginTop: "1rem",
    textDecoration: "underline",
    opacity: 0.7,
  },
});

const Services = ({ text }) => {
  const classes = useStyles();
  return (
    <Box style={{ marginTop: "1rem" }}>
      <Typography variant="h4" className={classes.headText}>
        Services
      </Typography>
      <Box className={classes.productImg}>
        <Box style={{ textAlign: "center" }}>
          <img src={product1} alt="product1" style={{ width: "300px" }} />
          <Typography variant="h6">Website Design & Development</Typography>
          <Typography variant="subtitle1" style={{ opacity: 0.6 }}>
            {text}
          </Typography>
          <Button variant="outlined" style={{marginTop:'1rem'}}>Read More</Button>
        </Box>
        <Box style={{ textAlign: "center" }}>
          <img src={product2} alt="product2" style={{ width: "300px" }} />
          <Typography variant="h6">On Demand Devs</Typography>
          <Typography variant="subtitle1" style={{ opacity: 0.6 }}>
            {text}
          </Typography>
          <Button variant="outlined" style={{marginTop:'1rem'}}>Read More</Button>
        </Box>
        <Box style={{ textAlign: "center" }}>
          <img
            src={product3}
            alt="product3"
            style={{ width: "300px", height: "300px", background: "#d5e1f5" }}
          />
          <Typography variant="h6">Webhosting</Typography>
          <Typography variant="subtitle1" style={{ opacity: 0.6 }}>
            {text}
          </Typography>
          <Button variant="outlined" style={{marginTop:'1rem'}}>Read More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
