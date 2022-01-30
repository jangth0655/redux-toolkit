import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const getToDos = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.value.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.value.filter((item) => item.id !== action.payload.id),
  },
});

export const { addToDo, deleteToDo } = getToDos.actions;
export const { action } = getToDos;

console.log(addToDo());
