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

const initialState = {
  token: "",
  refreshtoken: "",
  loading: false,
  error: false,
  sign: false,
};

// localStorage.setItem("token", JSON.stringify(token)) || [];
//   localStorage.setItem("refreshtoken", JSON.stringify(refreshtoken)) || [];

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
      //   localStorage.setItem("token", JSON.stringify(token));
      //   localStorage.setItem("refreshtoken", JSON.stringify(refreshtoken));
      return {
        ...state,
        loading: false,
        error: false,
        sign: true,
        token: payload.token,
        refreshtoken: payload.refreshtoken,
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
      //   localStorage.setItem("token", JSON.stringify(token));
      //   localStorage.setItem("refreshtoken", JSON.stringify(refreshtoken));
      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
        refreshtoken: payload.refreshtoken,
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
      //   localStorage.removeItem("token");
      //   localStorage.removeItem("refreshtoken");
      return {
        ...state,
        loading: false,
        error: false,
        sign: false,
        token: "",
        refreshtoken: "",
      };
    }
    default: {
      return state;
    }
  }
};
