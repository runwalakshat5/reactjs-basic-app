import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button is clicked from function component')
    }
  return (
    <div>
        <h1>This is function component</h1>
        <button className="btn btn-primary" onClick={clickHandler}> Click Me</button>
    </div>
  )
}

export default FunctionClick