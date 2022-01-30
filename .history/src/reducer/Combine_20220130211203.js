import { combineReducers } from "@reduxjs/toolkit";
import { getItems } from "./items";

const reducer = combineReducers({
  getItems,
});

export default reducer;
