import {
  GET_SINGLEBLOG_ERROR,
  GET_SINGLEBLOG_LOADING,
  GET_SINGLEBLOG_SUCCESS,
} from "./singleBlog.types";

const initialState = {
  loading: false,
  error: false,
  data: {},
};

export const singleBlogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLEBLOG_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SINGLEBLOG_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_SINGLEBLOG_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
