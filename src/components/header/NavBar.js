import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Logo from "../../images/home/logo-byte-quest.png";
import React from "react";

const contents = [
  { id: 1, name: "Home" },
  { id: 2, name: "About Us" },
  { id: 3, name: "Services" },
  { id: 4, name: "Products" },
  { id: 5, name: "Portfolio" },
];

const useStyles = makeStyles({
  aapBar: {
    background: "#fff",
    position: "unset",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contBox: {
    display: "flex",
    color: "#000",
    marginRight: "4rem",
    alignItems: "center",
  },
  contText: {
    fontSize: "1.2rem",
    paddingLeft: "1em",
    "& :hover": {
      color: "#8E44AD",
    },
  },

  root: {
    backgroundColor: "#8E44AD",
    color: "#fff",
    textTransform: "none",
    borderRadius: "25px",
    fontSize: "1.2rem",
    '&:hover':{
      color: "#8E44AD",
      cursor:'pointer'
    },
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.aapBar}>
      <Toolbar className={classes.toolbar}>
        <Box style={{ marginLeft: "3rem" }}>
          <img
            src={Logo}
            alt="logo"
            style={{ display: "block", height: "50px", borderRadius: "50%" }}
          />
        </Box>
        <Box className={classes.contBox}>
          <Box style={{ display: "flex", marginRight: "5rem" }}>
            {contents.map((content) => (
              <Typography key={content.id} className={classes.contText} >
                {content.name}
              </Typography>
            ))}
          </Box>
          <Button variant="outlined" size="medium" className={classes.root}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
