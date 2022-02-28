import React from 'react'

function child(props) {
    console.log(props)
  return (
    <div>
        <h2>This is child component</h2>
        <button className='btn btn-primary' onClick={()=>props.callParent('child')}> Call Parent</button>
    </div>
  )
}

export default child