import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(){
        super()
        this.state = {

        }
        console.log('Constructor of the LifeCycle A')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of the LifeCycle A')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of the LifeCycle A')
    }

  render() {
    console.log('render of the LifeCycle A')
    return (
        <div>
            <h2>LifeCycleA- Parent Component</h2>
            <LifeCycleB />
        </div>
    )
  }
}

export default LifeCycleA