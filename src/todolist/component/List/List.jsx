import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  render() {
    let { todos, handleCheck, deleteTodo } = this.props;
    return (
      <div>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            {...todo}
            handleCheck={handleCheck}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    );
  }
}
