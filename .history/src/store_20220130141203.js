import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import reducer from "./combine";

export const getList = createAsyncThunk("list/data", async (data, thunkAPI) => {
  const response = await axios.get(
    "https://codingapple1.github.io/shop/data2.json"
  );
  return response.data;
});

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
});
