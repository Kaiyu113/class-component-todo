import React, { Component } from "react";
import TodoList from "./todolist/index";
import CalContainer from "./calConnect/connect";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 添加路由 */}

        <TodoList />
        {/* 不需要监控redux去更新了，因为使用了container传props，props更新，所有的child更新 */}
        <CalContainer />
      </div>
    );
  }
}
