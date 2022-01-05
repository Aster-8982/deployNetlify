import { Box, makeStyles, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import React from "react";


const useStyles = makeStyles((theme) => ({
  head: {
    width: "100%",
    height: 50,
    background: "#000",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  textInfo: {
    color: "white",
    display: "flex",
    marginRight: "3rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.head}>
        <Box className={classes.textInfo}>
          <Box style={{ display: "flex" }}>
            <EmailIcon style={{ marginRight: "10px" }} />
            <Typography>info@bytequests.com</Typography>
          </Box>
          <Box style={{ display: "flex", marginLeft: "12px" }}>
            <CallIcon />
            <Typography>+91 9711999770, +1833-880--3355</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
