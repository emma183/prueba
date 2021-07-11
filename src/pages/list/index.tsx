import React, { useState } from "react";
import useSWR from "swr";
import { Typography } from "@material-ui/core";

import DashboardLayout from "../../components/layout";
import Seo from "../../components/seo";

const IndexPage = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const { data: user } = useSWR(
    `https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory?p=${pageIndex}`
  );

  return (
    <DashboardLayout>
      <Seo title="Nueva página" />
      {user &&
        user.data.map((notification, i) => (
          <Typography>{notification.name} </Typography>
        ))}
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </DashboardLayout>
  );
};

export default IndexPage;
