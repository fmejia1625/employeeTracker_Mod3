// Component for Employee List. Use class components for this file

import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
  // Set up constructor and pass state here. 
  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
    // binding method inside the constructor
    this.addEmployee = this.addEmployee.bind(this);
    // bind method to component here
    this.editEmployee = this.editEmployee.bind(this);
    // bind deleteEmployee event handler before defining function
    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.randomEmployee = this.randomEmployee.bind(this);
  }
  // create event handler for updating employee info. Should have argument of id since is being passed in the button.  
  editEmployee(id) {
    // use this.props.history.push and in backticks, create the path as written in app.js and pass in template literal. Had issue here, Here is what google had to say: 

    //"In Listemployeecomponent.jsx file under editEmployee, code it as this.props.history.push(`/update-employee/map/${id}`) and in App.JS <Route path = '/update-employee/map/:id component = {UpdateEmployeeComponent}>"

    this.props.history.push(`/update-employee/map/${id}`);
  }
  deleteEmployee(id) {
    // make the REST API call here. Pass id as argument
    EmployeeService.deleteEmployee(id).then(res => {
      //  we filter out the particular employee to be deleted from the employees array via .filter method
      this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
    });
  }
  // define event handler for viewEmployee here
  viewEmployee(id) {
    this.props.history.push(`/view-employee/map/${id}`);
  }


  // Call the component did mount method here. 
  componentDidMount() {
    // make ajax or rest api calls here. employees here refers to employees array in constructor
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data })
      console.log(res.data)
    });
  }
  // function for addEmployee button will be placed here. From codesource.io: The history.push() function belongs to react-router-dom and is used to move from the current page to another one. It takes the first argument as a destination path and a second argument as the state. 
  addEmployee() {
    this.props.history.push("/add-employees");
  }

  randomEmployee() {
    this.props.history.push("/random-employee");
  }

  render() {
    return (
      <div>
        {/* add h2 to show pageheader */}
        {/* inside the div, we create the table and use bootstrap classes for styling */}
        <h2 className="text-center">List of Employees</h2>
        {/* Create button here to add employee. this = event handler */}
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
          &nbsp;
          <button className="btn btn-info" onClick={this.randomEmployee}>View Generated Employee</button>
        </div>
        <br></br>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email id</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* We are rendering the state within the table body, using .map function and assigning a key to the initial table row before having the data populated.   */}

            <tbody>
              {
                this.state.employees.map(
                  employee =>
                    <tr key={employee.id}>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.emailId}</td>
                      {/* add Update Employee button here */}
                      <td>
                        <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update Employee</button> &nbsp; &nbsp;
                        {/* place delete employee button here */}
                        <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete Employee</button> &nbsp; &nbsp;
                        {/* Button for view employee will be placed here */}
                        <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View Employee</button>
                      </td>
                    </tr>
                )
              }

            </tbody>

          </table>
        </div>

      </div>
    );
  }
}

export default ListEmployeeComponent;