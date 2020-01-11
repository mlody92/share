package com.arokis.share.user;

import com.arokis.general.controller.InsertBase;
import com.arokis.general.controller.RemoveBase;
import com.arokis.general.controller.UpdateBase;
import com.arokis.general.exception.OperationException;
import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserBase implements InsertBase<User>, UpdateBase<User> {

    @Autowired
    private UserDao userDao;

    @Override
    public void checkAddConditions(User user) throws OperationException {
        if (getUserDao().get(user.getEmail()) != null) {
            throw new OperationException("Podany e-mail jest już zajęty.");
        }
        //todo weryfikacja haseł
    }

    @Override
    public void checkUpdateConditions(User user) {

    }

    @Override
    public void validate(User user) {

    }

    @Override
    public void beforeUpdate(User user) {

    }

    @Override
    public void beforeInsert(User user) {
        //protected password
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
    }

    private UserDao getUserDao() {
        if (userDao == null) {
            userDao = new UserDao();
        }
        return userDao;
    }
}
