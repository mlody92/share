package com.arokis.general.controller;

import com.arokis.general.exception.NotImplementedException;
import com.arokis.general.exception.OperationException;
import com.arokis.general.json.ResponseJson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public abstract class CrudBaseController<T> {

    public ResponseEntity save(T obj, Errors errors) {
        try {
            getUpdate().checkUpdateConditions(obj);
            getUpdate().validate(obj);
//            getRepository().save(obj);
        } catch (Exception ex) {
            return new ResponseEntity<String>(ResponseJson.failure(ex.getMessage()), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<String>(ResponseJson.success("Operacja zapisu przebiegła pomyślnie."), HttpStatus.OK);
    }

    public ResponseEntity insert(T obj, Errors errors) {
        try {
            getInsert().checkAddConditions(obj);
            getInsert().beforeInsert(obj);
            getInsert().validate(obj);
//            getRepository().save(obj);
        } catch (OperationException ex) {
            return new ResponseEntity<String>(ResponseJson.failure(ex.getMessage()), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<String>(ResponseJson.success("Operacja zapisu przebiegła pomyślnie."), HttpStatus.OK);
    }

    protected abstract JpaRepository getRepository();

    public UpdateBase<T> getUpdate() throws OperationException {
        throw new NotImplementedException("Niezaimplementowano metody getUpdate");
    }

    public InsertBase<T> getInsert() throws OperationException {
        throw new NotImplementedException("Niezaimplementowano metody getInsert");
    }
}
