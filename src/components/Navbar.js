import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { maxWidth } from "@material-ui/system";

const styles = {
  idk: {
    backgroundColor: "#DFDFDF",
    minHeight: 0
  }
};
function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar>
      <Toolbar>
        <Button>Navbar</Button>
      </Toolbar>
      <Toolbar className={classes.idk}>
        <Button>Navbar2</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
