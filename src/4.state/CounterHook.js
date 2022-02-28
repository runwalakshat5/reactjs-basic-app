import React,{useState} from 'react'

function CounterHook() {
    console.log(useState(0))
    const [count,setCount] = useState(0)
    const addCount =() =>{
        setCount(count+1)
        
    }
  return (
    <div>CounterHook
        <h1>Count : {count}</h1>
        <button className='btn btn-primary' onClick={addCount}>Add Count</button>
    </div>
    
  )
}

export default CounterHook