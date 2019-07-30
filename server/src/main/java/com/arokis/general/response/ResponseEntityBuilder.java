package com.arokis.general.response;

import com.arokis.general.json.ResponseJson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseEntityBuilder {

    public static ResponseEntity success(String message) {
        return new ResponseEntity<>(ResponseJson.success(message), HttpStatus.OK);
    }

    public ResponseEntity failure(String error) {
        return new ResponseEntity<>(ResponseJson.failure(error), HttpStatus.BAD_REQUEST);
    }

    private ResponseEntityBuilder create(){
        ResponseEntityBuilder item = new ResponseEntityBuilder();
        return item;
    }
}
