import { combineReducers } from "@reduxjs/toolkit";
import { getData } from "./data";
import { toDoSlice } from "./todos";

const reducer = combineReducers({
  todo: toDoSlice.reducer,
  data: getData.reducer,
});

export default reducer;
