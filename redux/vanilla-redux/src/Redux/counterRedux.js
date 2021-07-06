import {createStore} from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "add";
const MINUS = "minus";

const reducer = (count = 0, action) => {
  if (action.type === ADD) return count + 1;
  else if (action.type === MINUS) return count - 1;
  else return count;
}

const onChange = () => {
  number.innerText = countStore.getState();
}

const countStore = createStore(reducer);
countStore.subscribe(onChange);


plus.addEventListener("click", () => {
  countStore.dispatch({type: ADD})
});

minus.addEventListener("click", () => {
  countStore.dispatch({type: MINUS})
});
