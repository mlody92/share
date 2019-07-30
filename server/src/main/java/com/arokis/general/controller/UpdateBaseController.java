package com.arokis.general.controller;

import com.arokis.general.exception.ErrorResponse;
import com.arokis.general.json.JsonBuilder;
import com.arokis.general.json.ResponseJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Validated
@RestController
public class UpdateBaseController<T> {

    @Autowired
    private UpdateRepository<T> updateRepository;

    public ResponseEntity save(@Valid @RequestBody T obj, Errors errors) {
        try {
            updateRepository.save(obj);
        } catch (Exception ex) {
            return new ResponseEntity<String>(ResponseJson.failure(ex.getMessage()), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<String>(ResponseJson.success("Operacja zapisu przebiegła pomyślnie."), HttpStatus.OK);
    }


}
