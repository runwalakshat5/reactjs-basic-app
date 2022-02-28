import React, { Component } from 'react'

export class EventBindOne extends Component {
    constructor(){
        super()
        this.state= {
            message: 'Hello'
        }
        // // 3rd approach
        // this.changeMessage = this.changeMessage.bind(this)
    }
    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message:'Thank You'
    //     })

    changeMessage(message){
        console.log(this)
        this.setState({
            message: message
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button className='btn btn-primary' onClick={this.changeMessage}>Change Message</button> */}
          {/* {1st Approach} */}
          {/* <button className='btn btn-primary' onClick={this.changeMessage.bind(this, "Thank You")}>Change Message</button> */}
          {/* 2nd Approach*/}
            <button className="btn btn-primary" 
                    onClick={() =>this.changeMessage("Thank You")}>Change Message</button>
           
      </div>
    )
  }
}

export default EventBindOne