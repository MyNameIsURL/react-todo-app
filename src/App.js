import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    let todos = this.state.todos.slice();
    todos.push(todo);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo</h2>
        </div>
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
