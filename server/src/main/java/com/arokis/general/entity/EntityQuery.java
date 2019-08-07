package com.arokis.general.entity;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class EntityQuery {

    @PersistenceContext
    private EntityManager entityManager;

    protected EntityManager getEm() {
        return entityManager;
    }
}
