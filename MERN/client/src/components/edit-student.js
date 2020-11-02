import React from 'react'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import axios from 'axios'; 
// import {connect}  from 'react-redux';
// import {updated_data} from '../redux/Action';
import {data,Del} from './Fun.js';

class EditStudent extends React.Component {
    constructor(props)
    {
        super(props); 
        this.state = {
            name:'',
            email:'',
            rollno:''
        }
        this.onChangeStudentName = this.onChangeStudentName.bind(this); 
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this); 
    }
    componentDidMount()
    {
        console.log('Data is ',data);
        axios.get('http://localhost:8080/students/edit-student/'+data)
        .then((res) => {
            this.setState({
                name:res.data.name, 
                email:res.data.email, 
                rollno:res.data.rollno
            }); 
        })
        .catch((err) => {
            console.log(err.message);
        })
    }

    onChangeStudentName(e) {
        this.setState({name:e.target.value}); 
    }
    onChangeStudentEmail(e) {
        this.setState({email:e.target.value}); 
    }
    onChangeStudentRollno(e) {
        this.setState({rollno:e.target.value}); 
    }
    onSubmit(e) {
        
        e.preventDefault(); 
        const studentObject = {
            name:this.state.name, 
            email: this.state.email, 
            rollno: this.state.rollno, 
        }; 

        axios.put('http://localhost:8080/students/update-student/'+ data, studentObject)
        .then((res) => {
            console.log(res.data); 
            console.log('Student sucessfully updated');
            Del();
            
        }).catch((err) => {
            console.log(err.message);
        })
    }
    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit.bind(this)}>

                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={this.state.email} onChange={this.onChangeStudentEmail} />
                    </Form.Group>

                    <Form.Group controlId="Rollno">
                        <Form.Label>Rollno</Form.Label>
                        <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
                    </Form.Group>

                    <Button variant="danger" size="lg"
 block="block" type="submit">Update Student</Button>
                </Form>
            </div>
        )
    }
}


// const mapStateToProps = state => {
//     return {
        
//     }
// }


export default  EditStudent