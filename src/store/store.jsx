import { configureStore } from "@reduxjs/toolkit";
import aceReducer from "../reducers/loginSlice"
export const store = configureStore({
  reducer: aceReducer,
});
