package com.arokis.general.controller;

import com.arokis.general.exception.OperationException;

public interface InsertBase<T> {

    public void checkAddConditions(T t) throws OperationException;

    public void validate(T t);

    public void beforeInsert(T t);
}
