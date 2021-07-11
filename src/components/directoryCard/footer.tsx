import React, { FC } from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  boxContainer: {
    marginTop: 30,
  },
  root: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#2E58FF",
    color: "#FFFFFF",
    margin: 10,
  },
});
interface IFooterProps {
  onPrevious: () => void;
  onNext: () => void;
  page: number;
}

const Footer: FC<IFooterProps> = props => {
  const { onNext, onPrevious, page } = props;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        disabled={page === 1 && true}
        onClick={onPrevious}
      >
        Página anterior
      </Button>
      <Typography>{page}</Typography>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={onNext}
      >
        Siguiente página
      </Button>
    </Box>
  );
};

export default Footer;
