package com.arokis.share.user;

import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Validated
@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping("/users")
    public List<User> getAllUser(Pageable pageable) {
        Page<User> all = repository.findAll(pageable);
        return all.getContent();
    }

    protected JpaRepository getRepository() {
        return repository;
    }


}
