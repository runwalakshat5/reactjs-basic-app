import React, { Component } from 'react';

 class UserGreetingOne extends Component {
     constructor(){
         super()

         this.state = {
             isLoggedIn: true
         }
     }
  render() {
    // Element Variable
      let message;

      if(this.state.isLoggedIn){
        message = <div><h1>Welcome Akshat</h1></div>
      } else {
        message = <div><h1>Welcome Guest</h1></div>
      }
      return message
  }
}

export default UserGreetingOne;