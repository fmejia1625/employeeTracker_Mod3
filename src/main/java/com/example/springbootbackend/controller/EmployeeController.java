package com.example.springbootbackend.controller;

import com.example.springbootbackend.model.Employee;
import com.example.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}


//We create REST API here. The standard in RequestMapping is by declaring version No.
//We will then inject employee repository within the EmployeeController class. The controller class is here.
//essentially, the database URL and requests are made here. 