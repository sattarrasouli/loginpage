import { CircularProgress, Grid } from "@mui/material";
import * as React from "react";

export default function LoadingCircular() {
  return (
    <Grid container sx={{ color: "grey.500", display: "flex", justifyContent: "center" }} spacing={2} direction="row">
      <CircularProgress color="inherit" size={25} />
    </Grid>
  );
}
