import { ADD, SUB } from "../constant";
import store from "../store";
//同步
export const add = (data) => ({ type: ADD, data });
export const sub = (data) => ({ type: SUB, data });

//async action
export const asyncAdd = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch(add(data));
    }, time);
  };
};
