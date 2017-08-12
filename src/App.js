import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        "Make dinner tonight!",
        "Fold the laundry.",
        "Learn to make a React app!"
      ]
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
          <ul>
            {
              this.state.todos.map((todo) => <TodoItem todo={todo}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
