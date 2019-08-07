package com.arokis.general.controller;

import com.arokis.general.json.ResponseJson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

public abstract class UpdateBaseController<T> {


    public ResponseEntity save(@Valid @RequestBody T obj, Errors errors) {
        try {
            getRepository().save(obj);
        } catch (Exception ex) {
            return new ResponseEntity<String>(ResponseJson.failure(ex.getMessage()), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<String>(ResponseJson.success("Operacja zapisu przebiegła pomyślnie."), HttpStatus.OK);
    }

    protected abstract JpaRepository getRepository();
}
