import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    console.log("PROPS: ", props);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    this.props.addTodo(todo);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <p>{ this.state.value }</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>

    );
  }
}
