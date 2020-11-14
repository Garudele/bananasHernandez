import { createStore, combineReducers } from "redux";
import reducers from "../reducers";
import reducerCinta from "../reducers/cintas.js";

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,reducerCinta
    }),
    {}
  );
}
