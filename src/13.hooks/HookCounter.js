import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount(count => count +1)
    }

  return (
    <div className="container">
        <h1>Count: {count}</h1>
        <button onClick={() => incrementCount()} className="btn btn-primary">Increment</button>
    </div>
  )
}

export default HookCounter