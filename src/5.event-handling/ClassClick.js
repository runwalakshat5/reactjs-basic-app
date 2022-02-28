import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Button is clicked from class component')
    }
  render() {
    return (
      <div>
          <h1>
            This is Class component
          </h1>
          <button className='btn btn-primary' onClick={this.clickHandler}>
            Submit
          </button>
      </div>
    )
  }
}

export default ClassClick