import React, { ReactElement } from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { CssBaseline, createTheme, ThemeProvider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#1FB8FB",
    color: "#FFFFFF",
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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
};

export default DashboardLayout;
