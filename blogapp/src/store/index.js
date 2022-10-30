import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { blogsReducer } from "./blogs/blog.reducer";
import { singleBlogsReducer } from "./singleBlog/singleblog.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogsReducer,
  singleBlog: singleBlogsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
