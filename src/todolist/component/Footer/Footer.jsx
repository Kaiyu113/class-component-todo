import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    clearAllcomplete: PropTypes.func.isRequired,
    selectAll: PropTypes.func.isRequired,
  };

  render() {
    const { todos, clearAllcomplete, selectAll } = this.props;
    const total = todos.length;
    const filfuled = todos.reduce(
      (acc, item) => acc + (item.isCompelete ? 1 : 0),
      0
    );
    return (
      <div>
        <input
          type="checkbox"
          checked={total === filfuled && total !== 0 ? true : false}
          onChange={(e) => selectAll(e.target.checked)}
        />
        <span>
          已完成
          {filfuled}
          /全部{total}
          <button onClick={clearAllcomplete}>clear all complete task</button>
        </span>
      </div>
    );
  }
}
