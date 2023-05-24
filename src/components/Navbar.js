import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton
} from '@mui/material'

import { makeStyles } from '@mui/styles';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(5),
      display: "flex",
    },
    logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));

const Navbar =() => {

    const classes = useStyles();

  return (
      <>
         <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <IconButton href="/">
        <SensorDoorIcon/>
        <Typography variant="h4" className={classes.logo} color="white">
          Blockchain Door [Transmitter]
        </Typography>
        </IconButton>
      
      
          <div className={classes.navlinks} >
            <Link to="/" className={classes.link}>
              About
            </Link>     
          </div> 

             <div className={classes.navlinks} >
            <Link to="flow" className={classes.link}>
              Toggle Door
            </Link>     
          </div>   

      </Toolbar>
    </AppBar>
      </>
 
  );
}
export default Navbar;