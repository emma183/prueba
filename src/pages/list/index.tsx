import React, { useState } from "react";
import useSWR from "swr";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";

import DashboardLayout from "../../components/layout";
import Seo from "../../components/seo";
import CardContainer from "../../components/directoryCard";
import Footer from "../../components/directoryCard/footer";

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
export interface IVenues {
  _id: string;
  name: string;
  address: string;
}
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
}
interface IResponseDirectory {
  success: boolean;
  _dev: boolean;
  data: IDataDirectory[];
}

const IndexPage = () => {
  const classes = useStyles();
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: user,
    isValidating,
    error,
  } = useSWR<IResponseDirectory>(
    `https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory?p=${pageIndex}`
  );
  console.log("Ocurrio un error", error);
  return (
    <DashboardLayout>
      <Seo title="Directorios" />
      <Box className={classes.boxContainer}>
        <Grid container>
          {user &&
            user.data.map((directory, i) => (
              <Grid item xs={12} md={2}>
                <CardContainer
                  isValidating={isValidating}
                  name={directory.name}
                  venues={directory.venues}
                  discount={directory.discount}
                  dv_name={directory.dv_name}
                  expires={directory.expires}
                  media={directory.media}
                  dv_cashback={directory.dv_cashback}
                  dv_category={directory.dv_category}
                  dv_address={directory.dv_address}
                  cashback_decimal={directory.cashback_decimal}
                  created={directory.created}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Footer
        onPrevious={() => setPageIndex(pageIndex - 1)}
        onNext={() => setPageIndex(pageIndex + 1)}
        page={pageIndex}
      />
    </DashboardLayout>
  );
};

export default IndexPage;
