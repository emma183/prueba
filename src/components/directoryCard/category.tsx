import React, { FC } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

interface ICategoryProps {
  dv_category: string;
}

const useStyles = makeStyles({
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
});

const Category: FC<ICategoryProps> = (props: ICategoryProps) => {
  const { dv_category } = props;
  const classes = useStyles();

  return (
    <Box className={classes.containerFlex}>
      <Box>
        <Typography className={classes.fontBold} variant="body2">
          Categoria: &nbsp;
        </Typography>
      </Box>
      <Typography className={classes.fontBoldSubtitle} variant="body2">
        {dv_category}
      </Typography>
    </Box>
  );
};

export default Category;
