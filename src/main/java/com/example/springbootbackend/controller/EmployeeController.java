package com.example.springbootbackend.controller;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.Employee;
import com.example.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/")

public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

//    Get all employees REST API. We will create a list and a method getAllEmployees and returning instance of employee
//    repository using .findAll method from JPA repo.

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

//Create employee rest api here via the following method: will return Employee object, createEmployee will have Employee
// object as a method argument, we call employeeRepository.save method and pass in employee.
//    Add POST mapping annotation here to handle POST request
//    Must also use @RequestBody annotation as well. used to map web requests to Spring Controller methods.

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
//    Creating REST API for GET employee by ID. Pass in Long id (refer to Employee Model)

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {

//.orElseThrow => if the record does not exist in the database, display (or throw) the ResourceNotFoundException
// with a string message of employee does not exist. .orElseThrow uses lambda expressions because of functional
// interfaces (from W3 Schools: A lambda expression is a short block of code which takes in parameters and returns a
// value. They are similar to methods, except they do not need a name and can be implemented in the body of a method)
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with ID :" + id));
        return ResponseEntity.ok(employee);
// We use ResponseEntity class so that we can return HTTP Status, .ok() will pass the employee in the body. 
    }

//   To UPDATE employee REST API, first use ResponseEntity, then pass in id as argument along with object of Employee
//    class. Use PutMapping annotation, configure REST endpoint URL. We also use @PathVariable and @RequestBody annotations
//    before each argument.

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
//Copy and paste .orElseThrow from GET by ID,
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with ID :" + id));
//        Add the following info to employee object. Note to self, make sure you are changing last name and email
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());
//        send updated employee object to database using .save
        Employee updatedEmployee = employeeRepository.save(employee);
//        Return this object to the client
        return ResponseEntity.ok(updatedEmployee);
    }
    //     create DELETE employee REST API

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with ID :" + id));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Entry deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}


//We create REST API here. The standard in RequestMapping is by declaring version No.
//We will then inject employee repository within the EmployeeController class. The controller class is here.
//essentially, the database URL and requests are made here.
//Added cross origins annotation above the rest controller and added the local host url