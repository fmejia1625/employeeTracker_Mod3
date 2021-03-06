package com.example.springbootbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{


    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message ){
        super(message);
    }
}
//API Will throw this exception to the client if it is not found. Here is the exception that will be thrown to the user
//in case of error.