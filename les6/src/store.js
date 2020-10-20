import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers); // reducers worden al een eerste keer uitgevoerd -> initial state

export default store;
