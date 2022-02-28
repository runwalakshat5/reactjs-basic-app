import React from 'react'

function Person(props) {
        const {id, name, age, skill} = props.person
    return <h2>
                Id: {id} <br />
                Name: {name} <br />
                age: {age} <br />
                skill: {skill} <br /><br />
            </h2> 
}

export default Person