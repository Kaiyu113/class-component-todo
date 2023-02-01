import React, { Component } from "react";

export default class Item extends Component {
  state = { light: false };
  handleHeighLight = (flag) => {
    return () => {
      this.setState({ light: flag });
    };
  };

  render() {
    const { id, todo, isCompelete, handleCheck, deleteTodo } = this.props;
    const { light } = this.state;
    return (
      <div
        style={{ backgroundColor: light ? "#ddd" : null }}
        onMouseOver={this.handleHeighLight(true)}
        onMouseOut={this.handleHeighLight(false)}
      >
        <input
          type="checkbox"
          checked={isCompelete}
          onChange={() => handleCheck(id)}
        />
        <span>{todo}</span>
        <button
          style={{ display: light ? "inline" : "none" }}
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
