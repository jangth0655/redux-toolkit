import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk(
  "toDos/data",
  async (data, thunkAPI) => {
    const response = await axios.get(
      "https://codingapple1.github.io/shop/data2.json"
    );
    return response.data;
  }
);

export const store = configureStore({
  reducer: toDoSlice.reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const { addToDo, deleteToDo } = toDoSlice.actions;

console.log("action/type", addToDo());
console.log("actionCreator", toDoSlice.actions);
