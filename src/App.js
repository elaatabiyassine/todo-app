import React, { Component } from 'react'
import AddTodo from './AddTodo';
import ToDos from './ToDos';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, content: 'buy some milk' },
        { id: 2, content: 'play mario kart' },
      ]
    }
  }

  deleteTodo = (id) => {
    console.log(id)
    var todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    }
    )
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    }

    )
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          My Todos
        </h1>
        <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo}></ToDos>
        <AddTodo addTodo={this.addTodo} ></AddTodo>
      </div>
    )
  }
}

export default App;
