package com.arokis.share.user;

import com.arokis.general.controller.UpdateBaseController;
import com.arokis.general.exception.OperationException;
import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserDao;
import com.arokis.share.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Validated
@RestController
public class UserRestController extends UpdateBaseController<User> {

    @Autowired
    private UserDao userDao;

    @Autowired
    private UserRepository repository;

    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> getAllUser(Pageable pageable) {
        Page<User> all = repository.findAll(pageable);
        return all.getContent();
    }

    @RequestMapping(value = "/api/signup2", method = RequestMethod.POST)
    public ResponseEntity saveUser2(@Valid @RequestBody User user, Errors errors) {
        if (!getUserDao().isEmailAvailable(user.getEmail())) {
            System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//            throw new OperationException("Podany e-mail jest już zajęty. Wprowadź inny");
        }
        return super.save(user, errors);
    }

    @Override
    protected JpaRepository getRepository() {
        return repository;
    }

    UserDao getUserDao() {
        if (userDao == null) {
            userDao = new UserDao();
        }
        return userDao;
    }
}
