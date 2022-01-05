import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Logo from "../../images/home/logo-byte-quest.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    opacity: 0.8,
    background: "#ebf0ee",
    justifyItems: "center",
    justifyContent: "space-evenly",
    paddingTop:'1.5rem'
  },
  box1: {
    width: "20rem",
  },
  bottomCont:{
      background:'#ebf0ee',
      display:'flex',
      justifyContent:'center'
      
  }
});

const Bottom = () => {
  const classes = useStyles();
  return (
    <>
    <Box className={classes.root}>
      <Box className={classes.box1}>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
        <Typography variant="subtitle1">
          Es un hecho establecido hace demasiado tiempo que un lector se
          distraerá con el contenido del texto de un sitio mientras que mira su
          diseño.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">Links</Typography>
        <Typography variant="subtitle1">Our Clients</Typography>
        <Typography variant="subtitle1">Privacy Policy</Typography>
        <Typography variant="subtitle1">Our Benefits</Typography>
      </Box>
      <Box >
        <Typography variant="h5">Information</Typography>
        <Typography variant="subtitle1">Our Clients</Typography>
        <Typography variant="subtitle1">Privacy Policy</Typography>
        <Typography variant="subtitle1">Our Benefits</Typography>
      </Box>
      <Box>
        <Typography variant="h5">Contact Us</Typography>
        <Typography variant="subtitle1">
          +91 9711999770, +1833-880-3355
        </Typography>
        <Typography variant="subtitle1">info@bytequest.com</Typography>
        <Typography variant="subtitle1">
          84,Block A, Sector4, Noida, UP, 201301
        </Typography>
      </Box>
      
    </Box>
    <Divider/>
    <Box className={classes.bottomCont}>
        <Typography variant='subtitle1' style={{opacity:0.8}}>Copyright 2020 ByteQuest Software Private Limited. All Right Reserved.</Typography>
    </Box>
    <Divider/>
    </>
  );
};

export default Bottom;
