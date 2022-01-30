import { createSlice } from "@reduxjs/toolkit";
import { getList } from "./store";

const initialState = {
  data: [],
};

export const getList = createAsyncThunk("list/data", async (data, thunkAPI) => {
  const response = await axios.get(
    "https://codingapple1.github.io/shop/data2.json"
  );
  return response.data;
});

export const getData = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getList.fulfilled, (state, action) => {
      return [...action.payload];
    }),
});
