/*
 * action types
 */

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_COUNTER_OUTPUT = "SET_COUNTER_OUTPUT";

/*
 * other constants: CounterOutputTypes.DECIMAL
 */

export const CounterOutputTypes = {
  DECIMAL: "DECIMAL",
  HEXADECIMAL: "HEXADECIMAL",
};

/*
 * action creators
 */

export function doIncrement(number) {
  return { type: INCREMENT, number };
}

export function doDecrement(number) {
  return { type: DECREMENT, number };
}

export function setCounterOutput(output) {
  return { type: SET_COUNTER_OUTPUT, output };
}
