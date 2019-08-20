package com.arokis.general.entity;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

public class EntityQuery {

    @PersistenceContext
    private EntityManager entityManager;

    protected EntityManager getEm() {
        return entityManager;
    }

    protected CriteriaBuilder getCb() {
        return entityManager.getCriteriaBuilder();
    }

    protected <T> T single(CriteriaQuery<T> query) {
        TypedQuery<T> typedQuery = getEm().createQuery(query);
        List<T> resultList = typedQuery.getResultList();
        if (resultList.isEmpty()) {
            return null;
        }
        return resultList.get(0);
    }

}
