import React, { Component } from "react";
import hello from "./styles.module.css";
import { connect } from "react-redux";
import { addP } from "../redux/actions/person";

class Person extends Component {
  add = () => {
    const { addP } = this.props;
    addP({ name: this.name.value, age: this.age.value });
  };
  render() {
    const { person, count } = this.props;
    return (
      <div className={hello.container}>
        <h1>total is {count}</h1>
        <input placeholder="name" ref={(e) => (this.name = e)} />
        <input placeholder="age" ref={(e) => (this.age = e)} />
        <button onClick={this.add}>Add</button>
        <ul>
          {person.map((ele) => (
            <li key={`${ele.name}${ele.age}`}>
              name is {ele.name}, age is {ele.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default connect(
  (state) => ({ count: state.calReducer, person: state.personReducer }),
  {
    addP,
  }
)(Person);
