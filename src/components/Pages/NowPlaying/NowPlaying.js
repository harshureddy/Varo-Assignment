import React from "react";

import PageTitle from "../../_shared/PageTitle/PageTitle";
import useFetchData from "../../hooks/useFetchData";
import CardComponent from "./CardComponent";
import { Grid } from "@mui/material";

const NowPlaying = () => {
  const { response, error, loading } = useFetchData("/movies/nowPlaying");

  if (error) {
    return <PageTitle>Error</PageTitle>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <PageTitle>Now Playing</PageTitle>
      <Grid container>
        {response &&
          response.results.map((r, indx) => {
            return (
              <Grid item xs={12} sm={4} md={4} xl={2}>
                <CardComponent data={r} indx={indx}></CardComponent>
              </Grid>
            );
          })}
      </Grid>
 <p>{response && JSON.stringify(response.results)}</p> 
    </React.Fragment>
  );
};

export default NowPlaying;
