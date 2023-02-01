import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    getChildrenData: PropTypes.func.isRequired,
  };
  handleKeyUp = (e) => {
    const { key, target } = e;
    if (key === "Enter") {
      //console.log(target.value);
      if (target.value.trim() === "") {
        alert("shouldn't be empty");
        return;
      }
      const newTodo = {
        id: nanoid(),
        todo: target.value,
        isCompelete: false,
      };
      this.props.getChildrenData(newTodo);
      target.value = "";
    }
  };
  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyUp} placeholder="enter task" />
      </div>
    );
  }
}
