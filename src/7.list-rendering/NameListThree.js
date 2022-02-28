import React from 'react'

function NameListThree() {

    const persons = [
        {
            id: 1,
            name:"Scott",
            age:45,
            skill: 'ReactJS'
        },
        {
            id: 2,
            name:"Adam",
            age:44,
            skill: 'Angular'
        },
        {
            id: 3,
            name:"Tuan",
            age:42,
            skill: 'ReactJS'
        },
        {
            id: 4,
            name:"Uma",
            age:39,
            skill: 'Javascript'
        },

    ]

    // const nameList = persons.map((person, index) => {
    //     return <h2 key={index}>
    //         Id: {person.id} <br />
    //         Name: {person.name} <br />
    //         age: {person.age} <br />
    //         skill: {person.skill} <br /><br />
    //     </h2> 
    // })

    const nameList = persons.map(person => {
        return <h2 key={person.id}>
            Id: {person.id} <br />
            Name: {person.name} <br />
            age: {person.age} <br />
            skill: {person.skill} <br /><br />
        </h2> 
    })
    
  return nameList
}

export default NameListThree