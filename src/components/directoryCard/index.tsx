import Alert from "@material-ui/lab/Alert";
import React, { FC } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Tooltip,
  CardActions,
  Button,
} from "@material-ui/core";

import { IVenues } from "../../pages/list";
import CardSkeleton from "./card-skeleton";
import HeaderContainerDirectory from "./header-container-directory";
import Category from "./category";
interface IDataDirectory {
  name: string;
  venues: IVenues[];
  discount: number;
  created: number;
  cashback_decimal: number;
  dv_name: string;
  expires: any;
  media: string;
  dv_cashback: string;
  dv_category: string;
  dv_address: string;
  isValidating: boolean;
  onClick: ([]) => void;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    height: 350,
    marginLeft: 30,
    marginBottom: 30,
  },
  media: {
    height: 140,
  },
  cardWrapper: {
    display: "block",
    whiteSpace: "break-spaces",
  },
  fontBold: {
    fontWeight: "bold",
    color: "#001B69",
  },
  fontBoldSubtitle: {
    color: "#1FB8FB",
  },
  containerFlex: {
    display: "flex",
    flexDirection: "row",
  },
  cardActions: {
    marginTop: 30,
    justifyContent: "center",
  },
});

const CardContainer: FC<IDataDirectory> = (props: IDataDirectory) => {
  const {
    cashback_decimal,
    created,
    discount,
    dv_address,
    dv_cashback,
    dv_category,
    dv_name,
    expires,
    isValidating,
    media,
    name,
    venues,
    onClick,
  } = props;
  const classes = useStyles();

  if (isValidating === true) return <CardSkeleton />;
  return (
    <Tooltip
      placement="top-start"
      title={<Alert severity="info">CashBack del {dv_cashback}</Alert>}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={media} title={name} />
          <CardContent>
            <Typography
              className={classes.cardWrapper}
              gutterBottom
              variant="body1"
            >
              {name}
            </Typography>
            <Box>
              <HeaderContainerDirectory
                created={created}
                dv_address={dv_address}
              />
              <Category dv_category={dv_category} />
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button onClick={() => onClick(venues)} size="small" color="primary">
            Detalle
          </Button>
        </CardActions>
      </Card>
    </Tooltip>
  );
};

export default CardContainer;
