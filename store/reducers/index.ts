import { combineReducers} from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";

const reducer = combineReducers({
  userReducer,
})

export default reducer;

export type State = ReturnType<typeof reducer>