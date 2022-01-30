import { combineReducers } from "@reduxjs/toolkit";
import { getItems } from "./items";

const reducer = combineReducers({
  items: getItems.reducer,
});

export default reducer;
