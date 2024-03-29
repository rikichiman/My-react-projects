import React from 'react';
import TodoItem from './Todoitem'
import PropTypes from 'prop-types'



class Todos extends React.Component {
  
  render(){
      //console.log(this.props.todos)
    return(
         this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} 
            delTodo={this.props.delTodo}/>
         ))
    );
  }
}

//Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;