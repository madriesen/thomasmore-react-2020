import { INCREMENT, DECREMENT } from "../actions/index";

const currentNumber = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.number;
    case DECREMENT:
      if (state - action.number < 0) {
        return 0;
      } else {
        return state - action.number;
      }
    default:
      return state;
  }
};

export default currentNumber;
