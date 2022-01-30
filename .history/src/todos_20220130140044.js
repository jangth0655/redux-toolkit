import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  data: [],
};

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todo.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.todo.filter((todo) => todo.id !== action.payload),
  },
});
