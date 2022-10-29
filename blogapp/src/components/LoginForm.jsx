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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signinApi } from "../store/auth/auth.action";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.token);
  const [form, setForm] = useState({
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

  const handleSubmit = () => {
    // e.preventDefault();
    dispatch(signinApi(form));
    console.log(form);
  };

  if (isAuth) {
    navigate("/");
  }

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
          onChange={handleChange}
          name="email"
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 2, width: "30ch" }}
          size="Normal"
        />
        <TextField
          onChange={handleChange}
          name="password"
          type={"password"}
          label="Password"
          id="outlined-start-adornment"
          sx={{ m: 2, width: "30ch" }}
          size="Normal"
        />
        <Typography variant="p" color={"blue"} mb={5} textAlign={"right"}>
          <Link to="/forget-password">Forgot password?</Link>
        </Typography>
        <Button variant="contained" onClick={handleSubmit}>
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
