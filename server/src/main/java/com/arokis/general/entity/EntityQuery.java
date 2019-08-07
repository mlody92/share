package com.arokis.general.entity;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;

public class EntityQuery {

    @PersistenceContext
    private EntityManager entityManager;

    protected EntityManager getEm() {
        return entityManager;
    }

    protected CriteriaBuilder getCb() {
        return entityManager.getCriteriaBuilder();
    }


}
