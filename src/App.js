import React, { Component } from 'react';
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
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
