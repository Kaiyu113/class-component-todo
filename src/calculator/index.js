import React, { Component } from "react";
import hello from "./styles.module.css";
import store from "../redux/store";
import { add, sub, asyncAdd } from "../redux/calAction";
export default class Cal extends Component {
  add = () => {
    const { value } = this.dropdown;
    store.dispatch(add(value * 1));
  };
  sub = () => {
    const { value } = this.dropdown;
    store.dispatch(sub(value));
  };
  oddAdd = () => {
    if (store.getState() % 2 === 1) {
      const { value } = this.dropdown;
      store.dispatch(add(value * 1));
    }
  };
  asyncAdd = () => {
    const { value } = this.dropdown;
    store.dispatch(asyncAdd(value * 1, 1000));
  };
  render() {
    return (
      <div className={hello.container}>
        <div>{store.getState()}</div>
        <select ref={(e) => (this.dropdown = e)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.oddAdd}>当前数为奇数再加</button>
        <button onClick={this.asyncAdd}>async add</button>
      </div>
    );
  }
}
