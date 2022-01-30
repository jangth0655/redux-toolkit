import {
  combineReducers,
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk("toDos/getList", async () => {
  const response = await axios.get(
    "https://codingapple1.github.io/shop/data2.json"
  );
  return response.data;
});

const initialState = {
  value: [],
  data: [],
};

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.value.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.value.filter((todo) => todo.id !== action.payload),
  },
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => {
      const newData = [...state.date];
      return newData.push(...payload);
    },
  },
});

//const initialCountState = 0;

/* const countSlice = createSlice({
  name: "count",
  initialCountState,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
  },
});
 */
/* const rootReducer = combineReducers({
  toDos: toDoSlice.reducer,
  count: countSlice.reducer,
}); */

export const store = configureStore({
  reducer: toDoSlice.reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const { addToDo, deleteToDo } = toDoSlice.actions;

console.log("action/type", addToDo());
console.log("actionCreator", toDoSlice.actions);
