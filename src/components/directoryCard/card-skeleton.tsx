import React, { FC } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(() => ({
  skeleton: {
    margin: 0,
  },
  root: {
    maxWidth: 250,
    height: 400,
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
}));

const CardSkeleton: FC = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Skeleton animation="wave" variant="rect" className={classes.media} />
        <CardContent>
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardSkeleton;
