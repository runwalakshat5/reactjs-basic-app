import React, {useContext, createContext, useState} from 'react'
const UserContext = createContext()

function UseContextHook() {
    const [user, setUser] = useState('Scott')
   
  return (
    <UserContext.Provider value={user}>
        <h2>{`user is ${user}`}</h2>
        <Component1 user={user} />
    </UserContext.Provider>
  )
}

const Component1 = () => {
    return <React.Fragment>
        <h2>Component1</h2>
        <Component2 />
    </React.Fragment>
}

const Component2 = () => {
    return <React.Fragment>
        <h2>Component2</h2>
        <Component3 />
    </React.Fragment>
}

const Component3 = () => {
    return <React.Fragment>
        <h2>Component3</h2>
        <Component4 />
    </React.Fragment>
}

const Component4 = () => {
    const user = useContext(UserContext);
    return <h2>{`user is ${user} again` }</h2>
}

export default UseContextHook