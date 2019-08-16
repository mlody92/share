package com.arokis.general.exception;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.sql.SQLException;
import java.util.ArrayList;


public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    // ex. unique key exist
    @ExceptionHandler(value = {OperationException.class})
    public ResponseEntity<Object> handleConstraint(OperationException ex,
                                                   WebRequest request) {
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setSuccess(false);
        errorResponse.setMessage(ex.getMessage());
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {SQLException.class})
    public ResponseEntity<Object> handleConstraint(SQLException ex,
                                                   WebRequest request) {
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setSuccess(false);
        errorResponse.setMessage(ex.getMessage());
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    //ex. params null when columns not allow null's
    @ExceptionHandler(value = {ConstraintViolationException.class})
    public ResponseEntity<Object> handleConstraint(ConstraintViolationException ex,
                                                   WebRequest request) {
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setSuccess(false);
        errorResponse.setMessage("Nieprawidłowe parametry.");
        for (ConstraintViolation<?> constraintViolation : ex.getConstraintViolations()) {
            String[] path = constraintViolation.getPropertyPath().toString().split("\\.");
            errorResponse.addErrorField(path[path.length - 1], constraintViolation.getMessage());
        }
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }

    // ex. unique key exist
    @ExceptionHandler(value = {DataIntegrityViolationException.class})
    public ResponseEntity<Object> handleConstraint(DataIntegrityViolationException ex,
                                                   WebRequest request) {
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setSuccess(false);
        errorResponse.setMessage(ex.getMessage());
        if (ex.getCause() instanceof org.hibernate.exception.ConstraintViolationException) {
            org.hibernate.exception.ConstraintViolationException constraintViolationException = (org.hibernate.exception.ConstraintViolationException) ex.getCause();
            errorResponse.setMessage(constraintViolationException.getMessage());
            if (constraintViolationException.getCause() instanceof java.sql.SQLException) {
                errorResponse.setMessage(constraintViolationException.getCause().getMessage());
            }
        }
        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }


//    @ExceptionHandler(value = {Exception.class})
//    public final ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) {
//        System.out.println(ex.getMessage());
//
////        ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(), ex.getMessage()+" Custom Error",
////                request.getDescription(false));
//        return new ResponseEntity("b", HttpStatus.INTERNAL_SERVER_ERROR);
//    }

}