import React, { Component } from 'react'

class WelcomeOne extends Component {
  render() {
      const {firstName, lastName, city} = this.props
    return (
      <div className ="container">
          <ol>
              <li>{firstName}</li>
              <li>{lastName}</li>
              <li>{city}</li>
          </ol>
      </div>
    )
  }
}
export default WelcomeOne