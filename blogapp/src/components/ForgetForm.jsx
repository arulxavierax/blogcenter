import {
  Alert,
  Button,
  createTheme,
  FormControl,
  InputAdornment,
  responsiveFontSizes,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signinApi } from "../store/auth/auth.action";
import axiosInstance from "../utils/axios.instance";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ForgetForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    newPassword: "",
    otp: "",
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
    axiosInstance
      .post("/reset-password/verify", form)
      .then((e) => {
        navigate("/signin") 
      })
      .catch((e) => {
        <Alert severity="error">Wrong OTP</Alert>;
      });
  };

  const sentOtp = () => {
    const email = form.email;
    axiosInstance
      .post("/reset-password/getotp", {
        email,
      })
      .then((e) => {
        <Alert severity="success">OTP Sent. Check your email</Alert>;
      })
      .catch((e) => {
        console.log(e);
      });
  };


  return (
    <div
      style={{
        padding: "20px",
        paddingBottom: "30px",
        paddingTop: "30px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography color="#6a6c6d" variant="h4" component="p">
          Reset Password.
        </Typography>
      </ThemeProvider>
      <FormControl>
        <TextField
          onChange={handleChange}
          name="email"
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "30ch" }}
          size="Normal"
        />
        <Button onClick={sentOtp}>Sent OTP</Button>
        <TextField
          onChange={handleChange}
          name="newPassword"
          type="password"
          label="New Password"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "30ch" }}
          size="Normal"
        />
        <TextField
          onChange={handleChange}
          name="otp"
          label="OTP"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "30ch" }}
          size="Normal"
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
}

export default ForgetForm;
