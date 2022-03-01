import React, {useState} from 'react'

function HookUsingObject() {
    const [user, setUser] = useState({firstName: '', lastName: ''})
  return (
    <div className="container">
        <form>
            <label>FirstName</label>
            <input type="text" 
                   className="form-control w-50"
                   value={user.firstName}
                   onChange={(event) => setUser({...user,firstName: event.target.value})}
            />
            <br />
            <label>LastName</label>
            <input type="text" 
                   className="form-control w-50" 
                   value={user.lastName}
                   onChange={(event) => setUser({...user, lastName: event.target.value})}
            
            />
            <br />
            <h2>Your Firstname is : {user.firstName}</h2>
            <h2>Your Lastname is : {user.lastName}</h2>
        </form>
    </div>
  )
}

export default HookUsingObject