import {
  Button,
  createTheme,
  FormControl,
  InputAdornment,
  responsiveFontSizes,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);
function SignupForm() {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "20px",
        paddingBottom: "30px",
        paddingTop: "30px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          color="#6a6c6d"
          variant="h4"
          component="p"
          textAlign={"center"}
        >
          Join BlogCenter.
        </Typography>
      </ThemeProvider>
      <FormControl>
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 2, width: "30ch" }}
          size="Normal"
        />
        <TextField
          type={"password"}
          label="Password"
          id="outlined-start-adornment"
          sx={{ m: 2, width: "30ch" }}
          size="Normal"
        />
        <Button
          startIcon={<GoogleIcon />}
          size="large"
          variant="outlined"
          sx={{
            margin: "10px",
            color: "black",
            borderColor: "black",
            borderRadius: "50px",
          }}
        >
          Sign up with Google
        </Button>
        <Button
          startIcon={<FacebookIcon />}
          size="large"
          variant="outlined"
          sx={{
            margin: "10px",
            color: "black",
            borderColor: "black",
            borderRadius: "50px",
          }}
        >
          Sign up with Facebook
        </Button>
        <Button size="large" sx={{ margin: "10px" }} variant="contained">
          Submit
        </Button>
      </FormControl>
      <Typography
        display={"flex"}
        m={2}
        color="black"
        variant="p"
        component="p"
        textAlign={"center"}
      >
        Already have an account?
        <Link to="/signin">
        <Typography
          sx={{ cursor: "pointer" }}
          variant="p"
          component="p"
          textAlign={"center"}
          display={"flex"}
          color="green"
        >
          Sign in
        </Typography>
        </Link>
      </Typography>
    </div>
  );
}

export default SignupForm;
