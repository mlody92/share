package com.arokis.general.controller;

import com.arokis.general.exception.ErrorResponse;
import com.arokis.general.json.ResponseJson;
import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Validated
@RestController
public class UpdateBaseController<T> {

    @Autowired
    private JpaRepository<T, Long> repository;

    public ResponseEntity save(@Valid @RequestBody T user, Errors errors) {
        ResponseJson response = new ResponseJson();
        try {
            repository.save((T) user);
            response.setSuccess(true);
        } catch (Exception ex) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setSuccess(false);
            errorResponse.setMessage(ex.getMessage());
            return new ResponseEntity<ErrorResponse>(errorResponse, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<ResponseJson>(response, HttpStatus.OK);
    }


}
