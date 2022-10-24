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
import { Link } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);
function LoginForm() {
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
          Welcome back.
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
        <Typography variant="p" color={"blue"} mb={5} textAlign={"right"}>
          Forgot password?
        </Typography>
        <Button variant="contained">Submit</Button>
      </FormControl>
      <Typography
        display={"flex"}
        m={2}
        color="black"
        variant="p"
        component="p"
        textAlign={"center"}
      >
        No account?
        <Link to={"/signup"}>
          <Typography
            sx={{ cursor: "pointer" }}
            variant="p"
            component="p"
            textAlign={"center"}
            display={"flex"}
            color="green"
          >
            Create one
          </Typography>
        </Link>
      </Typography>
    </div>
  );
}

export default LoginForm;
