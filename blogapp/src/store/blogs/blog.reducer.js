import {
  GET_BLOG_ERROR,
  GET_BLOG_LOADING,
  GET_BLOG_SUCCESS,
} from "./blog.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const blogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BLOG_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_BLOG_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_BLOG_SUCCESS: {
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
