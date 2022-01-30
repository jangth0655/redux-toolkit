import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const toDoSlice = createSlice({
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

export const { addToDo, deleteToDo } = toDoSlice.actions;

console.log("action/type", addToDo());
console.log("actionCreator", toDoSlice.actions);
