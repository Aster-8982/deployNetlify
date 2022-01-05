import { Box, makeStyles, Typography } from "@material-ui/core";
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
    // textDecoration: "underline",
    opacity: 0.7,
  },
});

const Slider = ({title}) => {
  const classes = useStyles();
  return (
    <Box style={{ marginTop: "1rem" }}>
      <Typography variant="h4" className={classes.headText}>
        {title}
      </Typography>
      <Box className={classes.productImg}>
        <img src={product1} alt="product1" style={{ width: "400px" }} />
        <img src={product2} alt="product2" style={{ width: "400px" }} />
        <img
          src={product3}
          alt="product3"
          style={{ width: "400px", background: "#d5e1f5" }}
        />
         
      </Box>
      <Typography className={classes.ImgText}>lorem ipsum dolor</Typography>
    </Box>
  );
};

export default Slider;
