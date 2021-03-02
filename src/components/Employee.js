import React, { Component } from 'react';

class Employee extends Component {
    
    constructor(){
        super()
        this.state = {
            id: 101,
            name: 'Mark',
            email: 'm@gmail.com',
            phone: 99999
        }
    }

    updateEmploteeData(){
        this.setState({
            id: 101,
            name: 'New Name',
            email: 'm@gmail.com',
            phone: 8888
        })
    }

    render() { 
        return ( 
            <div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    <tr>
                        <td>{ this.state.id }</td>
                        <td>{ this.state.name }</td>
                        <td>{ this.state.email }</td>
                        <td>{ this.state.phone }</td>
                    </tr>
                </table>
                <button onClick={() => this.updateEmploteeData()}>Update Employee</button>
            </div>
         );
    }
}
 
export default Employee;