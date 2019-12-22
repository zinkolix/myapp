import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import todoData from './todoData'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todo.map(todos => {
        if(todos.id === id){
          todos.completed = !todos.completed;
        }
        return todos
      })
      return {
        todo: updatedTodos
      }
    })
  }
  
  render() {
    const todoItems = this.state.todo.map(item => 
    <TodoItem key={item.id} item={item}
    handleChange = {this.handleChange}
    />)
        
    return (
      <div className="todo-list" class="well well-sm">
        {todoItems}
      </div>
    );
  }
}

export default App;
