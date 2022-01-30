import { combineReducers } from "@reduxjs/toolkit";
import { getItems } from "./items";
import { getToDos } from "./todo";

const reducer = combineReducers({
  items: getItems.reducer,
  toDos: getToDos.reducer,
});

export default reducer;
