import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/login/loginSlice";
export const store = configureStore({
  reducer: {
    loginSlice,
  },
});
