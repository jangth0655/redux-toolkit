import {
  combineReducers,
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const Items = createAsyncThunk("item/shoes", async (data, thunkAPI) => {
  console.log(data);
  await axios("https://codingapple1.github.io/shop/data2.json").then(
    (res) => res
  );
});

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
  extraReducers: {
    [Items.pending](state, action) {},
    [Items.fulfilled](state, action) {},
    [Items.rejected](state, action) {},
  },
});

console.log(toDoSlice.extraReducers);

const initialCountState = 0;

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
