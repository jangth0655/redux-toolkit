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
    deleteToDo: (state, action) => {
      state.todo.forEach((item) => console.log(item.id, action.payload));
      // return state.todo.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToDo, deleteToDo } = toDoSlice.actions;

console.log("action/type", deleteToDo());
console.log("actionCreator", toDoSlice.actions);
