import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [];

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      return state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const store = configureStore({
  reducer: toDoSlice.reducer,
});

export const { addToDo, deleteToDo } = toDoSlice.actions;
