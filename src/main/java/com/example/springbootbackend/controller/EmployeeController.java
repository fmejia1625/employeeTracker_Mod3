package com.example.springbootbackend.controller;

import com.example.springbootbackend.model.Employee;
import com.example.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000" )
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
//    Creating REST API for get employee by ID. Pass in Long id (refer to Employee Model)
    public Employee getEmployeeById(Long id) {
        
    }
}


//We create REST API here. The standard in RequestMapping is by declaring version No.
//We will then inject employee repository within the EmployeeController class. The controller class is here.
//essentially, the database URL and requests are made here.
//Added cross origins annotation above the rest controller and added the local host url