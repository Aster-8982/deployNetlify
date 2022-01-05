import { Box, Button, InputBase, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Bottom from "./Bottom";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:'center',
    background: "#9af5e4",
    marginTop: "1rem",
    height: "30vh",
    width: "100%",
  },
  inputWithBtn:{
    position:'relative',
    marginRight:'2.5%'

  },
  input: {
    background: "#fff",
    width: "25rem",
    borderRadius: "20px",
  },
  btn:{
     position:'absolute',
     right:0,
     backgroundColor: "#8E44AD",
        color: "#fff",
        textTransform: "none",
        borderRadius: "20px",
        fontSize: "0.7rem",
        "&:hover": {
          backgroundColor: "#8E44AD",
        },
  },
  footerText: {
    marginLeft: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyItem: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
        <Box className={classes.footer}>
      <Box className={classes.footerText}>
        <Typography variant="h4">Let's Discuss</Typography>
        <Typography variant="subtitle1">
          Es un hecho establecido hace demasiado tiempo que un lector se
          distraerá con el contenido{" "}
        </Typography>
      </Box>
      <Box className={classes.inputWithBtn}>
        <InputBase type="text" className={classes.input} > </InputBase>
        <Button className={classes.btn}>Sign up</Button>
      </Box>
    </Box>
    <Bottom/>
    </>
  );
};

export default Footer;
