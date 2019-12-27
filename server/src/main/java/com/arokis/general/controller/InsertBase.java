package com.arokis.general.controller;

import com.arokis.general.exception.OperationException;

public interface InsertBase<T> extends BaseModel<T>{

    public void checkAddConditions(T t) throws OperationException;

    public void beforeInsert(T t);
}
