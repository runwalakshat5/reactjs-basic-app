import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import StudentMongoApi from '../11.ajax-calls/StudentMongoApi'
import NameListFour from '../7.list-rendering/NameListFour'

const Home = () => <div className="container"><h2>Welcome to Indiamart</h2></div>
const About = () => <div className="container"><h2>We are Indiamart</h2></div>
const Contact = () => <div className="container"><h2>Please contact Indiamart for any enquiries</h2></div>
const Error = () => <div className="container"><h2>Please contact administrator</h2></div>


function Routing() {
  return (
    <div>
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">IndiaMart</Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/home" className="nav-item nav-link active">Home</Link>
                        <Link to="/students" className="nav-item nav-link">Students</Link>
                        <Link to="/list" className="nav-item nav-link">NameList</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </div>
            </nav>       
                        {/* <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/students">Students</Link></li>
                <li><Link to="/list">NameList</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/students' element={<StudentMongoApi />} />
                <Route path="/list" element={<NameListFour />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    </div>
  )
}

export default Routing