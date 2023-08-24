
import { createStore } from "redux";

function reducer(state, action){
  const newState = {...state}
  return newState;
}
const store = createStore(reducer)
