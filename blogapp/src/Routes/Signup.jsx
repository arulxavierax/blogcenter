import { Box, Container, Grid, TextField } from "@mui/material";
import React from "react";
import SignupForm from "./SignupForm";

function Signup() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6} md={8}>
        <SignupForm />
      </Grid>
    </Grid>
  );
}

export default Signup;
