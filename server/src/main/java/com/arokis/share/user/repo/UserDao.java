package com.arokis.share.user.repo;

import com.arokis.general.entity.EntityQuery;
import com.arokis.share.user.model.User;
import com.arokis.share.user.model.User_;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

@Repository
public class UserDao extends EntityQuery {

//    @PersistenceContext
//    private EntityManager entityManager;

    public boolean isEmailAvailable(String email) {
        CriteriaBuilder cb = getEm().getCriteriaBuilder();
        CriteriaQuery<User> query = cb.createQuery(User.class);
        Root<User> root = query.from(User.class);
        query.select(root).where(
                cb.equal(root.get(User_.email), email),
                cb.isNull(root.get(User_.dateRemove))
        );
        TypedQuery<User> typedQuery = getEm().createQuery(query);
        return typedQuery.getResultList().isEmpty();
    }


}
