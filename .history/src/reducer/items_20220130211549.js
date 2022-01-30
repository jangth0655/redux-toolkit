import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const itemsList = createAsyncThunk("data/getitems", async () => {
  const response = await axios.get(
    "https://codingapple1.github.io/shop/data2.json"
  );
  return response.data;
});

export const getItems = createSlice({
  name: "getItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(itemsList.fulfilled, (state, action) => {
      state.data.push(...action.payload);
    });
  },
});
