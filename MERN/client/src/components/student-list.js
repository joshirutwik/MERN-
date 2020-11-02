import React from "react"; 
import axios from "axios"; 
import Table from 'react-bootstrap/Table'; 
import StudentTableRow from './StudentTableRow'; 

export default class StudentList extends React.Component {
    constructor(props) {
        super(props)    
        this.state = {
             students:[]
        };
    }

    componentDidMount()
    {
        axios.get('http://localhost:8080/students/').then(res => {
            this.setState({ 
                students:res.data
            }); 
        }).catch((err) => {
            console.log(err);
        })
    }

    DataTable() {
        return this.state.students.map((res,i) => {
            return <StudentTableRow obj={res} key={i} />
        }); 
    }

    render() 
    {
        return (
            <div className="table-wrapper">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }    
}