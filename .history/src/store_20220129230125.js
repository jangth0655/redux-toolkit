import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [];

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
  },
});

export const store = configureStore({});
