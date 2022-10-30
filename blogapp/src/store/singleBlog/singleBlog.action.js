import axios from "axios";
import {
  GET_SINGLEBLOG_ERROR,
  GET_SINGLEBLOG_LOADING,
  GET_SINGLEBLOG_SUCCESS,
} from "./singleBlog.types";

let token = JSON.parse(localStorage.getItem("token"));
let refreshtoken = JSON.parse(localStorage.getItem("refreshtoken"));
const config = {
  headers: {
    authorization: token,
    refreshtoken: refreshtoken,
  },
};

export const getSingleBlogApi = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLEBLOG_LOADING });
  try {
    let response = await axios.get(`http://localhost:8080/blogs/${id}`, config);
    dispatch({
      type: GET_SINGLEBLOG_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: GET_SINGLEBLOG_ERROR,
      payload: e.data,
    });
  }
};
