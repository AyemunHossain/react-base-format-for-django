import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
 
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="white"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            TechCyrus 
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
