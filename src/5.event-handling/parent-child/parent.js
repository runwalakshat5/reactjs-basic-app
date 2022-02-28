import React, { Component } from 'react'
import child from './child'

export class Parent extends Component {
    constructor(){
        super()

        this.state={
            name:'parent'
        }

        this.callParent = this.callParent.bind(this)
    }

    callParent(child){
        alert('Calling ${this.state.name} from ${child}')
    }
  render() {
    return (
      <div>
          <child callParent={this.callParent}/>
      </div>
    )
  }
}

export default Parent