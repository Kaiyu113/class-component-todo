import React from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import List from "./component/List/List";

import "./styles.css";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, todo: "mock1", isCompelete: true },
      { id: 2, todo: "mock2", isCompelete: false },
    ],
  };
  getChildrenData = (dataobj) => {
    const { todos } = this.state;
    this.setState({ todos: [dataobj, ...todos] });
  };
  handleCheck = (id) => {
    const { todos } = this.state;
    const newTodo = todos.map((ele) => {
      if (ele.id === id) {
        ele.isCompelete = !ele.isCompelete;
      }
      return ele;
    });
    this.setState({ todos: newTodo });
  };
  deleteTodo = (id) => {
    if (!window.confirm("delete")) return;
    const { todos } = this.state;
    const newTodo = todos.filter((i) => i.id !== id);
    this.setState({ todos: newTodo });
  };
  clearAllcomplete = () => {
    const { todos } = this.state;
    const newTodo = todos.filter((item) => !item.isCompelete);
    this.setState({ todos: newTodo });
  };
  selectAll = (isCompelete) => {
    const { todos } = this.state;
    if (todos === []) return;
    const newTodo = todos.map((item) => {
      return { ...item, isCompelete };
    });
    this.setState({ todos: newTodo });
  };
  render() {
    return (
      <div>
        <Header getChildrenData={this.getChildrenData} />
        <List
          todos={this.state.todos}
          handleCheck={this.handleCheck}
          deleteTodo={this.deleteTodo}
        />
        <Footer
          todos={this.state.todos}
          clearAllcomplete={this.clearAllcomplete}
          selectAll={this.selectAll}
        />
      </div>
    );
  }
}
export default App;
