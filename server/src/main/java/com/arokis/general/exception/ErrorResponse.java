package com.arokis.general.exception;

import java.util.*;

public class ErrorResponse {

    private boolean success;
    private String message;
    private Collection<Error> errors = new ArrayList<>();

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Collection<Error> getErrors() {
        return errors;
    }

    public void setErrors(Collection<Error> errors) {
        this.errors = errors;
    }

    public void addErrorField(String path, String msg) {
        if (errors == null) {
            errors = new ArrayList<>();
        }
        errors.add(Error.create(path, msg));
    }

    static class Error {

        private String field;
        private String message;

        static Error create(String field, String message) {
            Error er = new Error();
            er.setField(field);
            er.setMessage(message);
            return er;
        }

        public String getField() {
            return field;
        }

        void setField(String field) {
            this.field = field;
        }

        public String getMessage() {
            return message;
        }

        void setMessage(String message) {
            this.message = message;
        }
    }

}
