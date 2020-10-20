import React from "react";
import "./App.css";

import store from "./store";
import {
  CounterOutputTypes,
  doIncrement,
  doDecrement,
  setCounterOutput,
} from "./actions/index";

const App = function () {
  let unsubscribe1 = store.subscribe(() => {
    console.log("Subscription 1: " + store.getState().currentNumber);
  });

  let unsubscribe2 = store.subscribe(() => {
    console.log("Subscription 2: " + store.getState().counterOutput);
  });
  // Dispatch some actions
  store.dispatch(doIncrement(5));
  store.dispatch(doDecrement(1));
  store.dispatch(doDecrement(5));
  store.dispatch(doIncrement(1));
  store.dispatch(setCounterOutput(CounterOutputTypes.HEXADECIMAL));
  store.dispatch(setCounterOutput(CounterOutputTypes.DECIMAL));

  // Stop listening to state updates
  unsubscribe1();
  unsubscribe2();

  return (
    <div>
      <h4>Ready for Redux?</h4>
    </div>
  );
};

export default App;
