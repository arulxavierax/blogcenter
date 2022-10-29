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
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { googleSignupApi, signupApi } from "../store/auth/auth.action";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.token);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = value;
    setForm({
      ...form,
      [name]: val,
    });
  };

  // const googleSigup = () => {
  //   dispatch(googleSignupApi());
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupApi(form));
    console.log(form);
  };

  if (isAuth) {
    navigate("/");
  }

  return (
    <Box
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
          onChange={handleChange}
          name="name"
          label="Full Name"
          id="outlined-start-adornment"
          sx={{ m: 0.5, mt: 3, width: "30ch" }}
          size="Normal"
        />
        <TextField
          onChange={handleChange}
          name="email"
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 0.5, width: "30ch" }}
          size="Normal"
        />
        <TextField
          onChange={handleChange}
          name="password"
          type={"password"}
          label="Password"
          id="outlined-start-adornment"
          sx={{ m: 0.5, width: "30ch" }}
          size="Normal"
        />
        <Button
          startIcon={<GoogleIcon />}
          size="large"
          variant="outlined"
          sx={{
            margin: "5px",
            color: "black",
            borderColor: "black",
            borderRadius: "50px",
          }}
          // onClick={googleSigup}
        >
          <a href="http://localhost:8080/auth/google">Sign in with Google</a>
        </Button>
        <Button
          startIcon={<FacebookIcon />}
          size="large"
          variant="outlined"
          sx={{
            margin: "5px",
            color: "black",
            borderColor: "black",
            borderRadius: "50px",
          }}
        >
          Sign up with Facebook
        </Button>
        <Button
          onClick={handleSubmit}
          size="large"
          sx={{ margin: "10px" }}
          variant="contained"
        >
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
    </Box>
  );
}

export default SignupForm;
