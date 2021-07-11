import React, { FC } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { IVenues } from "../../pages/list";
import CardSkeleton from "./card-skeleton";
import HeaderContainerDirectory from "./header-container-directory";

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
  fontBoldState: {
    marginRight: 65,
  },
  containerFlex: {
    display: "flex",
    flexDirection: "row",
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
  } = props;
  const classes = useStyles();
  var date = new Date(created * 1000);
  const convert = str => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  if (props.isValidating) return <CardSkeleton />;
  return (
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
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardContainer;
