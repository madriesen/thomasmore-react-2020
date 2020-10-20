import { CounterOutputTypes, SET_COUNTER_OUTPUT } from "../actions/index";

const counterOutput = (state = CounterOutputTypes.DECIMAL, action) => {
  switch (action.type) {
    case SET_COUNTER_OUTPUT:
      return action.output;
    default:
      return state;
  }
};

export default counterOutput;
