import { configureStore } from "@reduxjs/toolkit";

import reducer from "./combine";

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
});
