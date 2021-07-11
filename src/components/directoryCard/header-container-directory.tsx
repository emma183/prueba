import React, { FC } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

interface IHeaderContainerDirectory {
  created: number;
  dv_address: string;
}

const useStyles = makeStyles({
  fontBold: {
    fontWeight: "bold",
    color: "#001B69",
  },
  textAddress: {
    marginRight: 65,
  },
  containerFlex: {
    display: "flex",
    flexDirection: "row",
  },
});

const HeaderContainerDirectory: FC<IHeaderContainerDirectory> = (
  props: IHeaderContainerDirectory
) => {
  const { created, dv_address } = props;
  const classes = useStyles();
  var date = new Date(created * 1000);
  const convert = str => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  return (
    <Box className={classes.containerFlex}>
      <Box className={classes.textAddress}>
        <Typography className={classes.fontBold} variant="body2">
          {dv_address}
        </Typography>
      </Box>
      <Typography className={classes.fontBold} variant="body2">
        {convert(date.toUTCString())}
      </Typography>
    </Box>
  );
};

export default HeaderContainerDirectory;
