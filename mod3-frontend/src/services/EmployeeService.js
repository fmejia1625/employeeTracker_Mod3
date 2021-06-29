// Created a new folder named services and added EmployeeService.JS file within it. We will make our call to the created API here. 
import axios from 'axios';
// create const employeeApiBaseUrl and assign it url. 
const employeeApiBaseUrl = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  // create GET request here. First create method get emplopyees that will return the axiox.get method. 
  getEmployees(){
    return axios.get(employeeApiBaseUrl);
  }
  // create POST request here. Create method that will allow post employee info to postgres
  createEmployee(employee){
    return axios.post(employeeApiBaseUrl, employee);
  }
  // create method for GET employee by id request here. 
  getEmployeeById(employeeId) {
    return axios.get(employeeApiBaseUrl + '/' + employeeId);
  }
  // Create method for UPDATE Employee request here
  updateEmployee(employee, employeeId) {
    return axios.put(employeeApiBaseUrl + '/' + employeeId, employee);
  }
  // We will write the method to make the REST API call for DELETE employee
  deleteEmployee(employeeId){
    return axios.delete(employeeApiBaseUrl + '/' + employeeId);
  }
}

// export object of the class
export default new EmployeeService();