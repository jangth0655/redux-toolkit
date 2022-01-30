import { combineReducers } from "@reduxjs/toolkit";
import { getData } from "./data";
import { toDoSlice } from "./todos";

export default combineReducers({
  todos: toDoSlice.reducer,
  data: getData.reducer,
});
