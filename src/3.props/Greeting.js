import React from 'react'

function Greeting(props) {
    const {id, name, skill, isAdmin, callDisplay, children} = props
    return (
        <div className='container'>
        <h2> id:{id} <br/> 
             Name:{name} <br/> 
             skill:{skill} <br/> 
              isAdmin {isAdmin ? "True" : "False"} <br/>
             message :{callDisplay()} <br />
             children:{ children ? children : "No child Elements"}
        </h2>
        <br />
    </div>
    )
}

export default Greeting