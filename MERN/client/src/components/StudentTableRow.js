import React, { Component } from 'react'; 
import { Link,BrowserRouter as Router } from 'react-router-dom'; 
import axios from 'axios'; 
import Button from 'react-bootstrap//Button';
import {update} from './Fun';
// import Example from './Example';
// import {connect}  from 'react-redux';
// import {getter_d} from '../redux/Action.js';

// const mapStateToProps = state => {
//     return {
      
//     }
// }



export class StudentTableRow extends Component {
    constructor(props) {
        super(props)
            this.state = {
             
        }
        this.deleteStudent = this.deleteStudent.bind(this); 
    }

    deleteStudent()
    {
        axios.delete('http://localhost:8080/students/delete-student/'+this.props.obj._id).then((res) => {
            console.log('Student Deleted Successfully');
        }).catch((err) => {
            console.log(err.message);
        })
    }
    CLK(val)
    {       
        update(val);
    }
    
    render() { 
        return (
            <div>
                <tr>
                    <td>{this.props.obj.name}</td>
                    <td>{this.props.obj.email}</td>
                    <td>{this.props.obj.rollno}</td>
                    <td>
              
                        <Link onClick={() => this.CLK(this.props.obj._id)} className="edit-link" to={"/edit-student/"}>
                        Edit
                        </Link>
                    
                    {/* <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link> */}
                        {/* <Example  data={this.props.obj._id}/> */}
                                               
                        <Button onClick={this.deleteStudent} variant="danger">
                            Delete
                        </Button><br />
                        
                    </td>
                </tr>
            </div>
        )
    }
}

export default StudentTableRow