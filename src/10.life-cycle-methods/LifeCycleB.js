import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(){
        super()
        this.state = {

        }
        console.log('Constructor of the LifeCycle B')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of the LifeCycle B')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of the LifeCycle B')
    }

  render() {
    console.log('render of the LifeCycle B')
    return (
      <div>
          <h2>LifeCycleB- Child Component</h2>
      </div>
    )
  }
}

export default LifeCycleB