import { Box, Container, Grid, TextField } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";

function Signin() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default Signin;
