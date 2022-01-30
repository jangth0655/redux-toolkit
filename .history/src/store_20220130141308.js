import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import reducer from "./combine";

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
});
