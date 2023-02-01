import { ADD, SUB } from "./constant";
const initialState = 99;

// Use the initialState as a default value
export default function calReducer(prestate = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  const { type, data } = action;
  switch (type) {
    case ADD:
      return prestate + data;
    case SUB:
      return prestate - data;

    // code block
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return prestate;
  }
}
