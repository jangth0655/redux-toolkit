import { createSlice } from "@reduxjs/toolkit";
import { getList } from "./store";

const initialState = {
  data: [],
};

export const getData = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getList.fulfilled, (state, action) => {
      return [...action.payload];
    }),
});
