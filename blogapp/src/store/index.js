import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { blogsReducer } from "./blogs/blog.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
