import React, { Component } from 'react'

export class TodoApi extends Component {
    constructor(){
        super()

        this.state ={
            todos: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => this.setState({todos: data}));
    }
  render() {
    return (
      <div>
          <h1>Todo List</h1>

              {
                  this.state.todos.map(todo => {
                      return (
                          <ul key={todo.id}>
                            <li>{todo.id}</li>
                            <li>{todo.title}</li> 
                            <li>{todo.completed ? "true": "false"}</li> 
                            <br />
                          </ul>
                      )
                             
                  })
              }
      </div>
    )
  }
}

export default TodoApi