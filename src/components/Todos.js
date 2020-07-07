import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

class Todos extends Component {
  
  render(){
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }  
}

Todos.propType = {
  todo:PropType.array.isRequired,
  markComplete:PropType.func.isRequired,
  delTodo:PropType.func.isRequired
  
}

export default Todos;
