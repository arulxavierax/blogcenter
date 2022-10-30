import axios from "axios";
import axiosInstance from "../../utils/axios.instance";
import {
  GET_BLOG_ERROR,
  GET_BLOG_LOADING,
  GET_BLOG_SUCCESS,
} from "./blog.types";

let token = JSON.parse(localStorage.getItem("token"));
let refreshtoken = JSON.parse(localStorage.getItem("refreshtoken"));
const config = {
  headers: {
    authorization: token,
    refreshtoken: refreshtoken,
  },
};

export const getBlogApi = () => async (dispatch) => {
  dispatch({ type: GET_BLOG_LOADING });
  axios
    .get("http://localhost:8080/blogs", config)
    .then((d) => {
      dispatch({
        type: GET_BLOG_SUCCESS,
        payload: d.data,
      });
    })
    .catch((e) => {
      console.log(e.message);
      dispatch({
        type: GET_BLOG_ERROR,
        payload: e.data,
      });
    });
};
