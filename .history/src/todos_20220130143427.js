import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todo.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const { addToDo, deleteToDo } = toDoSlice.actions;

console.log("action/type", addToDo());
console.log("actionCreator", toDoSlice.actions);
