import axios from "axios";
import axiosInstance from "../../utils/axios.instance";
import {
  GET_BLOG_ERROR,
  GET_BLOG_LOADING,
  GET_BLOG_SUCCESS,
} from "./blog.types";

export const getBlogApi = () => async (dispatch) => {
  dispatch({ type: GET_BLOG_LOADING });
  axiosInstance
    .get("/blogs")
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
        payload: e,
      });
    });
};
