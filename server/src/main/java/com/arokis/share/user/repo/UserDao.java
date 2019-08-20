package com.arokis.share.user.repo;

import com.arokis.general.entity.EntityQuery;
import com.arokis.share.user.model.User;
import com.arokis.share.user.model.User_;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

@Repository
public class UserDao extends EntityQuery {


    public boolean isEmailAvailable(String email) {
        CriteriaQuery<User> query = getCb().createQuery(User.class);
        Root<User> root = query.from(User.class);
        query.select(root).where(
                getCb().equal(root.get(User_.email), email),
                getCb().isNull(root.get(User_.dateRemove))
        );
        TypedQuery<User> typedQuery = getEm().createQuery(query);
        return typedQuery.getResultList().isEmpty();
    }

    public User get(String email) {
        CriteriaQuery<User> query = getCb().createQuery(User.class);
        Root<User> root = query.from(User.class);
        query.select(root).where(
                getCb().equal(root.get(User_.email), email),
                getCb().isNull(root.get(User_.dateRemove))
        );
        return single(query);
    }


}
