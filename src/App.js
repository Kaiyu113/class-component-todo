import React, { Component } from "react";
import TodoList from "./todolist/index";
import Contianer from "./calculator/index";
import Person from "./person";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 添加路由 */}
        <TodoList />
        <Contianer />
        <Person />
      </div>
    );
  }
}
