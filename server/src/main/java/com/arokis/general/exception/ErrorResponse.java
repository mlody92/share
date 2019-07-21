package com.arokis.general.exception;

import javax.validation.Path;
import java.util.*;

public class ErrorResponse {

    private boolean success;
    private String error;
    private Error errorField;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public Error getErrorField() {
        return errorField;
    }

    public void setErrorField(Error errorField) {
        this.errorField = errorField;
    }

    public void createOrAdd(Path path, String message) {
        String[] split = path.toString().split("\\.");
        if (split.length == 0) {
            return;
        }
        if (errorField == null) {
            Error er = new Error();
            er.setField(split[0]);
            errorField = er;
        }
        errorField.createOrAdd(split, 1, message);
    }

    class Error {

        private String field;
        private Collection<Error> errorParams = new ArrayList<>();
        private String message;


        public String getField() {
            return field;
        }

        public void setField(String field) {
            this.field = field;
        }

        public Collection<Error> getErrorParams() {
            return errorParams;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public void createOrAdd(String[] pathSplit, int level, String msg) {
            if (pathSplit.length == 0 || level > pathSplit.length - 1) {
                return;
            }

            for (Error er : errorParams) {
                if (er.getField().equals(pathSplit[level])) {
                    er.createOrAdd(pathSplit, level + 1, msg);
                    return;
                }
            }
            if (level == pathSplit.length - 1) {
                Error errorToAdd = new Error();
                errorToAdd.setField(pathSplit[level]);
                errorToAdd.setMessage(msg);
                errorParams.add(errorToAdd);
            } else {
                Error errorToAdd = new Error();
                errorToAdd.setField(pathSplit[level]);
                errorParams.add(errorToAdd);
                errorToAdd.createOrAdd(pathSplit, level + 1, msg);
            }
        }
    }
}
