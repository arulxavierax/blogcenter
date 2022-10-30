import {
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_LOADING,
  AUTH_LOGOUT_SUCCESS,
  AUTH_SIGNIN_ERROR,
  AUTH_SIGNIN_LOADING,
  AUTH_SIGNIN_SUCCESS,
  //   AUTH_SIGNUPGOOGLE_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
} from "./auth.types";
import { loadData, saveData } from "./localstorage";

const initialState = {
  token: loadData("token"),
  refreshtoken: loadData("refreshtoken"),
  loading: false,
  error: false,
  sign: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGNIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGNIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGNIN_SUCCESS: {
      const token = payload.token;
      saveData("token", token);
      const refreshtoken = payload.refreshToken;
      saveData("refreshtoken", refreshtoken);
      return {
        ...state,
        loading: false,
        error: false,
        sign: true,
        token: token,
        refreshtoken: refreshtoken,
      };
    }
    case AUTH_SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGNUP_SUCCESS: {
      const token = payload.token;
      saveData("token", token);
      const refreshtoken = payload.refreshToken;
      saveData("refreshtoken", refreshtoken);
      return {
        ...state,
        loading: false,
        error: false,
        token: token,
        refreshtoken: refreshtoken,
      };
    }

    case AUTH_LOGOUT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_LOGOUT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    // case AUTH_SIGNUPGOOGLE_SUCCESS: {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: false,
    //     token: payload.token,
    //     refreshtoken: payload.refreshtoken,
    //   };
    // }
    case AUTH_LOGOUT_SUCCESS: {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshtoken");
      return {
        ...state,
        loading: false,
        error: false,
        sign: false,
      };
    }
    default: {
      return state;
    }
  }
};
