import axios from "axios";
import axiosInstance from "../../utils/axios.instance";
import {
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_SUCCESS,
  AUTH_SIGNIN_ERROR,
  AUTH_SIGNIN_LOADING,
  AUTH_SIGNIN_SUCCESS,
  // AUTH_SIGNUPGOOGLE_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
} from "./auth.types";

let token = JSON.parse(localStorage.getItem("token"));
let refreshToken = JSON.parse(localStorage.getItem("refreshtoken"));
const config = {
  headers: {
    authorization: token,
    refreshToken: refreshToken,
  },
};

export const signinApi = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNIN_LOADING });
  try {
    let response = await axios.post(
      "http://localhost:8080/users/signin",
      creds
    );
    console.log(response.data);
    dispatch({ type: AUTH_SIGNIN_SUCCESS, payload: response.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: AUTH_SIGNIN_ERROR, payload: e.message });
  }
};

export const signupApi = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNUP_LOADING });
  try {
    let response = await axios.post(
      "http://localhost:8080/users/signup",
      creds
    );
    dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: response.data });
  } catch (e) {
    console.log(e.message);
    dispatch({ type: AUTH_SIGNUP_ERROR, dispatch: e.message });
  }
};

// export const googleSignupApi = () => async (dispatch) => {
//   try {
//     let response = await axios.get("http://localhost:8080/auth/google");
//     console.log(response.data);
//     dispatch({ type: AUTH_SIGNUPGOOGLE_SUCCESS, payload: response.data });
//   } catch (e) {
//     console.log(e.message);
//   }
// };

export const logoutApi = () => async (dispatch) => {
  try {
    let response = await axios.post(
      "http://localhost:8080/users/logout",
      config
    );
    dispatch({ type: AUTH_LOGOUT_SUCCESS });
  } catch (e) {
    console.log(e.message);
    dispatch({ type: AUTH_LOGOUT_ERROR, payload: e.message });
  }
};
