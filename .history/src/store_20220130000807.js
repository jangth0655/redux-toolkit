import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

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

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
  },
});

const rootReducer = combineReducers({
  toDos: toDoSlice.reducer,
  count: countSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const { addToDo, deleteToDo } = toDoSlice.actions;
