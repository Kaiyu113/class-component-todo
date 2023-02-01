import React, { Component } from "react";
import TodoList from "./todolist/index";
import Cal from "./calculator/index";
import CalContainer from "./calConnect/connect";
import store from "./redux/store";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 添加路由 */}

        <TodoList />
        <CalContainer store={store}>
          <Cal />
        </CalContainer>
      </div>
    );
  }
}
