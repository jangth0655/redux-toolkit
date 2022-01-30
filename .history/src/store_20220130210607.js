import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/Combine";

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
