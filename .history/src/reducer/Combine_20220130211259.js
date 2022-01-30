import { combineReducers } from "@reduxjs/toolkit";
import { getItems } from "./items";

const reducer = combineReducers({
  item: getItems.reducer,
});

export default reducer;
