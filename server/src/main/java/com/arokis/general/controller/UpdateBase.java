package com.arokis.general.controller;

public interface UpdateBase<T> {

    public void checkUpdateConditions(T t);

    public void validate(T t);

    public void beforeUpdate(T t);
}
