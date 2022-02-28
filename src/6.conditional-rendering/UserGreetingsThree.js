import React, { Component } from 'react';

 class UserGreetingThree extends Component {
     constructor(){
         super()

         this.state = {
             isLoggedIn: true
         }
     }
  render() {
     return(
         // Short Circuit Operator &&
         this.state.isLoggedIn && <div><h1>Welcome Akshat</h1></div>
     )
  }
}

export default UserGreetingThree;