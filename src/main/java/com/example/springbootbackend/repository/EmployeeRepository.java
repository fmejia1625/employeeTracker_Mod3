package com.example.springbootbackend.repository;

import com.example.springbootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}

//By creating this interface and having the repository extend JpaRepository, we can use database methods and provides
//implementation for all the database methods such as findAll, pagination, etc. (CRUD methods)
//will now make API call to front end
//Resolved issue in PostMan