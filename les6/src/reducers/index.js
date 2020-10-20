// root reducer

import { combineReducers } from "redux";

import counterOutput from "./counteroutput_reducer";
import currentNumber from "./currentnumber_reducer";

const reducers = combineReducers({
  counterOutput,
  currentNumber,
});

export default reducers;
