import React, { ReactElement } from "react";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Typography,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${
      theme.palette.type !== "dark" ? "#d4d5f2" : theme.palette.divider
    }`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${0}px)`,
    },
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    minHeight: 50,
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

interface IDashboardLayoutProps {
  children?: Array<ReactElement | null | ReactElement[]> | ReactElement;
}

const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Reworth
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default DashboardLayout;
