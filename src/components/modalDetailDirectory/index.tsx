import Dialog from "@material-ui/core/Dialog";

import React, { FC } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { IVenues } from "../../pages/directory";
import { Close } from "@material-ui/icons";

interface IModalActivatedCardProps {
  isOpen: boolean;
  onClose: () => void;
  isDetail: IVenues[];
}

const useStyles = makeStyles(theme => ({
  container: {
    padding: "1.5rem 2rem",
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  containerDetail: {
    display: "flex",
    flexDirection: "row",
  },
  fontBold: {
    fontWeight: "bold",
    color: "#001B69",
  },
  textAddress: {
    marginRight: 65,
  },
  buttonsWrapper: {
    "& button": {
      marginRight: "1.5rem",
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
}));

const ModalActivated: FC<IModalActivatedCardProps> = (
  props: IModalActivatedCardProps
) => {
  const { isOpen, onClose, isDetail } = props;
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      aria-labelledby="Detalle"
      open={isOpen}
      onClose={onClose}
      fullScreen={fullScreen}
      PaperProps={{ elevation: 0 }}
    >
      <Container className={classes.container}>
        <Grid container justify="space-between" alignItems="center">
          <Typography color="textPrimary" className={classes.title}>
            Detalles
          </Typography>
          <Box>
            <IconButton size="small" onClick={onClose}>
              <Close />
            </IconButton>
          </Box>
        </Grid>
        <Box>
          {isDetail &&
            isDetail.map((venues, i) => (
              <Box className={classes.containerDetail}>
                <Box className={classes.textAddress}>
                  <Typography className={classes.fontBold} variant="body2">
                    Nombre: {venues.name}
                  </Typography>
                </Box>
                <Typography className={classes.fontBold}>
                  Direccion: {venues.address}
                </Typography>
              </Box>
            ))}
        </Box>
        <Grid container justify="flex-end" className={classes.buttonsWrapper}>
          <Button variant="outlined" color="primary" onClick={onClose}>
            Cancelar
          </Button>
        </Grid>
      </Container>
    </Dialog>
  );
};

export default ModalActivated;
