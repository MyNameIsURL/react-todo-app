import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo">remove</button> {this.props.todo}
      </div>
    );
  }
}
