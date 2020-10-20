// import {
//   CounterOutputTypes,
//   SET_COUNTER_OUTPUT,
//   INCREMENT,
//   DECREMENT,
// } from "../actions/index";

// const initialState = {
//   counterOutput: CounterOutputTypes.DECIMAL,
//   currentNumber: 0,
// };

// const reducer = (state = {}, action) => {
//   return {
//     counterOutput: counterOutputReducer(state.counterOutput, action),
//     currentNumber: currentNumberReducer(state.currentNumber, action),
//   };
// };

// const currentNumberReducer = (
//   currentNumber = initialState.currentNumber,
//   action
// ) => {
//   switch (action.type) {
//     case INCREMENT:
//       return currentNumber + action.number;
//     case DECREMENT:
//       return currentNumber - action.number;
//     default:
//       return currentNumber;
//   }
// };

// const counterOutputReducer = (
//   counterOutput = initialState.counterOutput,
//   action
// ) => {
//   switch (action.type) {
//     case SET_COUNTER_OUTPUT:
//       return action.output;
//     default:
//       return counterOutput;
//   }
// };
