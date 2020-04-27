import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = (diff) => ({ type: INCREMENT, diff });
const decrement = (diff) => ({ type: DECREMENT, diff });

const initialState = {
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.diff,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.diff,
      };
  }
}

const store = createStore(reducer);

console.log(store.getState());
