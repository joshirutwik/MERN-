import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student";
import EditStudent from "./components/edit-student";
import StudentList from "./components/student-list.js";

 

function App() {
  return (
    
   <Router>
     <div>
       <h3>React Router </h3>
       <nav className="navbar navbar-expand-lg navbar-light mr-auto">
       
         <li><Link to={'/create-student'} className="nav-link">Create Student</Link></li>
         <li><Link to={'/edit-student'} className="nav-link">Edit Student</Link></li>
         <li><Link to={'/list-student'} className="nav-link">Student List</Link></li>
       </nav>
       <Switch>
         <Route exact path="/create-student" component={CreateStudent}></Route>
         <Route exact path="/edit-student" component={EditStudent}></Route>
         <Route exact path="/list-student" component={StudentList}></Route>
       </Switch>
     </div>
   </Router>

  );
}

export default App;
