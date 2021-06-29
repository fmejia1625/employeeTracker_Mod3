import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // create property of id. We must get the id from the route
      id: this.props.match.params.id,
      employee: {}
    }
  }
  // Use component did mount to make RESP API or AJAX calls
  // call the id ot this method, method returns promise object and will get a response. Extract employee data from response. Use setState to set response data to employee property. 
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then(res => {
      this.setState({ employee: res.data });
    })
  }

  render() {
    return (
      <div>
        {/* must show data to the web page. */}
        <div>
          {/* use bootstrap classes for styling */}
          <br></br>
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">View Employee Information</h3>
            <div className="card-body">
              <div className="row">
                <label>Employee First Name: </label>
                <div>{this.state.employee.firstName}</div>
              </div>
              <br></br>
              <div className="row">
                <label>Employee Last Name: </label>
                <div>{this.state.employee.lastName}</div>
              </div>
              <br></br>
              <div className="row">
                <label>Employee Email: </label>
                <div>{this.state.employee.emailId}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;