import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // create state here for that input values can be passed into state
      firstName: '',
      lastName: '',
      emailId: ''
    }
    // bind event handlers here in constructor
    this.alterFirstNameHandler = this.alterFirstNameHandler.bind(this);
    this.alterLastNameHandler = this.alterLastNameHandler.bind(this);
    // binding the alterEmailHandler was causing an error; this has since been resolved. 
    // this.alterEmailHandler = this.alterEmailHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  // create event handler for altering first name
  alterFirstNameHandler = (e) => {
    this.setState({ firstName: e.target.value })
  }
  // create event handler for altering last name
  alterLastNameHandler = (e) => {
    this.setState({ lastName: e.target.value })
  }
  // create event handler for altering email
  alterEmailHandler = (e) => {
    this.setState({ emailId: e.target.value })
  }
  // create event handler for saveEmployee
  saveEmployee = (e) => {
    e.preventDefault();
    // get data from state and assign it to variable employee
    let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
    // console.log the data by using JSON.stringify
    console.log("employee entry => " + JSON.stringify(employee));

    // Here we will call EmployeeService component and the method for the POST request
    // employee object is passed in as parameter. Axios POST returns a promise, use .then
    EmployeeService.createEmployee(employee).then(res => {
      this.props.history.push('/employees');
    });
  }
  // Create cancel method for cancel button. Redirect user to employees URL
  cancel() {
    this.props.history.push("/employees");
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee Form</h3>
              <div className="card-body">
                <form>
                  <div className="form-froup">
                    <label>First Name: </label>
                    <input placeholder="Input First Name" name="firstName" className="form-control"
                      value={this.state.firstName} onChange={this.alterFirstNameHandler} />
                  </div>

                  <div className="form-froup">
                    <label>Last Name: </label>
                    <input placeholder="Input Last Name" name="lastName" className="form-control"
                      value={this.state.lastName} onChange={this.alterLastNameHandler} />
                  </div>

                  <div className="form-froup">
                    <label>E-mail Address: </label>
                    <input placeholder="Input E-mail Address" name="email" className="form-control"
                      value={this.state.emailId} onChange={this.alterEmailHandler} />
                  </div>
                  {/* create buttons here so user can save information */}

                  <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                  {/* Event handlers added here as well to cancel user input */}
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;

// This component will be the form in which the user will input employee information. 