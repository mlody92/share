package com.arokis.share.user;

import com.arokis.general.controller.CrudBaseController;
import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@Validated
@RestController
@RequestMapping(value = "/user")
public class UserCrudController extends CrudBaseController<User> {

    @Resource
    private UserBase userBase;


    @Autowired
    private UserRepository repository;


    @Override
    protected JpaRepository getRepository() {
        return repository;
    }

    @Override
    protected UserBase getBaseModel() {
        if (userBase == null) {
            userBase = new UserBase();
        }
        return userBase;
    }


}
