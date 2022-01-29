import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
    getItems: {},
  },
});

const initialCountState = 0;

const countSlice = createSlice({
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

export const store = configureStore({
  reducer: toDoSlice.reducer,
});

export const { addToDo, deleteToDo } = toDoSlice.actions;
