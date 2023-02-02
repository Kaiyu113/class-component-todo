import React, { Component } from "react";
import hello from "./styles.module.css";
import { connect } from "react-redux";
import { add, sub, asyncAdd } from "../redux/actions/calculator";
//整合在一起
class Cal extends Component {
  add = () => {
    const { value } = this.dropdown;
    this.props.add(value * 1);
  };
  sub = () => {
    const { value } = this.dropdown;
    this.props.sub(value * 1);
  };
  oddAdd = () => {
    if (this.props.count % 2 === 1) {
      const { value } = this.dropdown;
      this.props.add(value * 1);
    }
  };
  asyncAdd = () => {
    const { value } = this.dropdown;
    this.props.asyncAdd(value * 1, 1000);
  };
  render() {
    const { count, person } = this.props;
    return (
      <div className={hello.container}>
        <h1>total person {person.length}</h1>
        <div>{count}</div>
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
export default connect(
  (state) => ({
    count: state.calReducer,
    person: state.personReducer,
  }),
  {
    add,
    sub,
    asyncAdd,
  }
)(Cal);
