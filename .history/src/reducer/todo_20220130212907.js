import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const getToDos = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.value.push({ text: action.payload, id: Date.now(0) });
    },
  },
});
