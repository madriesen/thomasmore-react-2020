// import { combineReducers } from "redux";

// import {
//   CounterOutputTypes,
//   SET_COUNTER_OUTPUT,
//   INCREMENT,
//   DECREMENT,
// } from "../actions/index";

// const reducers = combineReducers({
//   counterOutput,
//   currentNumber,
// });

// const currentNumber = (currentNumber = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return currentNumber + action.number;
//     case DECREMENT:
//       return currentNumber - action.number;
//     default:
//       return currentNumber;
//   }
// };

// const counterOutput = (counterOutput = CounterOutputTypes.DECIMAL, action) => {
//   switch (action.type) {
//     case SET_COUNTER_OUTPUT:
//       return action.output;
//     default:
//       return counterOutput;
//   }
// };
