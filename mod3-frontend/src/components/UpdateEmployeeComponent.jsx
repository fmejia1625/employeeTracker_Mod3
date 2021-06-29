import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // id must match be put into state which will allow us to get id into route
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: ''
    }

    this.alterFirstNameHandler = this.alterFirstNameHandler.bind(this);
    this.alterLastNameHandler = this.alterLastNameHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }


  alterFirstNameHandler = (e) => {
    this.setState({ firstName: e.target.value })
  }

  alterLastNameHandler = (e) => {
    this.setState({ lastName: e.target.value })
  }

  alterEmailHandler = (e) => {
    this.setState({ emailId: e.target.value })
  }
  // Call component did mount in order to acces getEmployeeById from EmployeeService component.  
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId
      });
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();

    let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };

    console.log("employee entry => " + JSON.stringify(employee));
    // We will call the method for updateEmployee from out EmployeeService here
    EmployeeService.updateEmployee(employee, this.state.id).then(res => {
      this.props.history.push('/employees');
    });
    //Remove the createEmployee method and make the API call.  
  }

  cancel() {
    this.props.history.push("/employees");
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Employee Form</h3>
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


                  <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
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

export default UpdateEmployeeComponent;