import React, {useState, useEffect} from 'react'

function HookApi() {
    const [students, setStudents] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
      fetch("http://localhost:3001/api/students")
      .then(response => response.json())
      .then(data => setStudents(data))
    },[])

    // useEffect(() => {
    //   setTimeout(() => {
    //       setTotal(() => total + 1)
    //   }, 1000)
    // }, [])

  return (
    <div className="container">
        <h2>Get Student Data</h2>
        {/* <h2>Get the total {total}</h2> */}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(student => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.city}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default HookApi