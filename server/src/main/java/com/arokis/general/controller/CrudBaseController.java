package com.arokis.general.controller;

import com.arokis.general.exception.NotImplementedException;
import com.arokis.general.exception.OperationException;
import com.arokis.general.json.ResponseJson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;

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

    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    protected ResponseEntity insert(@Valid @RequestBody T obj, Errors errors) {
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

    protected ResponseEntity remove(T obj, Errors errors) {
        try {
            getRemove().checkRemoveConditions(obj);
            getRemove().beforeRemove(obj);
//            getRepository().delete(obj);
        } catch (OperationException ex) {
            return new ResponseEntity<String>(ResponseJson.failure(ex.getMessage()), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<String>(ResponseJson.success("Operacja zapisu przebiegła pomyślnie."), HttpStatus.OK);
    }

    protected abstract JpaRepository getRepository();

    private UpdateBase<T> getUpdate() throws OperationException {
        if (getBaseModel() instanceof UpdateBase) {
            return (UpdateBase<T>) getBaseModel();
        }
        throw new NotImplementedException("Metoda getBaseModel nie jest instancją UpdateBase");
    }

    private InsertBase<T> getInsert() throws OperationException {
        if (getBaseModel() instanceof InsertBase) {
            return (InsertBase<T>) getBaseModel();
        }
        throw new NotImplementedException("Metoda getBaseModel nie jest instancją InsertBase");
    }

    private RemoveBase<T> getRemove() throws OperationException {
        if (getBaseModel() instanceof RemoveBase) {
            return (RemoveBase<T>) getBaseModel();
        }
        throw new NotImplementedException("Metoda getBaseModel nie jest instancją RemoveBase");
    }

    protected BaseModel<T> getBaseModel() throws OperationException {
        throw new NotImplementedException("Niezaimplementowano metody getBaseModel");
    }


}
