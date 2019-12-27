package com.arokis.general.controller;

public interface UpdateBase<T> extends BaseModel<T>{

    public void checkUpdateConditions(T t);

    public void beforeUpdate(T t);
}
