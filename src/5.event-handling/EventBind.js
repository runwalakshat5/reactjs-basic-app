import React, { Component } from 'react'

export class EventBind extends Component {
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

    // 4TH approach
    changeMessage =()=>{
        console.log(this)
        this.setState({
            message:'Thank You'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button className='btn btn-primary' onClick={this.changeMessage}>Change Message</button> */}
          {/* {1st Approach} */}
          {/* <button className='btn btn-primary' onClick={this.changeMessage.bind(this)}>Change Message</button> */} 
          {/* 2nd Approach*/}
          {/* Fat-arrow function will have parent's value */}
            {/* <button className="btn btn-primary" 
                    onClick={() =>this.changeMessage()}>Change Message</button> */} 
            {/* 3rd Approach */}
            {/* <button className="btn btn-primary" 
                    onClick={this.changeMessage}>Change Message</button> */}
            
            {/* 4th Approach*/}
            <button className="btn btn-primary" 
                    onClick={this.changeMessage}>Change Message</button>
      </div>
    )
  }
}

export default EventBind