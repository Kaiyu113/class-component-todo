import React, { Component } from "react";
import TodoList from "./todolist/index";
import Cal from "./calculator/index";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 添加路由 */}
        <TodoList />
        <Cal />
      </div>
    );
  }
}
