package com.arokis.general.controller;

public interface RemoveBase<T> extends BaseModel<T> {

    public void checkRemoveConditions(T t);

    public void beforeRemove(T t);
}
