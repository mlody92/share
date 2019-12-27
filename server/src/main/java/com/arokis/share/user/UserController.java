package com.arokis.share.user;

import com.arokis.general.controller.CrudBaseController;
import com.arokis.general.exception.OperationException;
import com.arokis.general.json.ResponseJson;
import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserDao;
import com.arokis.share.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

@Validated
@RestController
public class UserController extends CrudBaseController<User> {

    @Resource
    private UserBase insert;

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

    @RequestMapping(value = "/user/signup", method = RequestMethod.POST)
    public ResponseEntity signup(@Valid @RequestBody User user, Errors errors) throws OperationException {
        //todo potwierdzenie hasła walidacja po stronie serwera
        return insert(user, errors);
    }

    @RequestMapping(value = "/user/signin", method = RequestMethod.POST)
    public ResponseEntity signin(@RequestBody User user, HttpSession session) throws OperationException {
        User logged = getUserDao().get(user.getEmail());
        if (logged == null) {
            throw new OperationException("Brak podanego użytkownika.");
        }
        if (!logged.getPassword().equals(user.getPassword())) {
            throw new OperationException("Nieprawidłowe hasło użytkownika.");
        }
        return new ResponseEntity<String>(ResponseJson.success("Operacja logowania przebiegła pomyślnie."), HttpStatus.OK);
    }

    @Override
    protected JpaRepository getRepository() {
        return repository;
    }

    //    todo scalić insert/update
    @Override
    public UserBase getInsert() {
        if (insert == null) {
            insert = new UserBase();
        }
        return insert;
    }

    @Override
    public UserBase getUpdate() {
        if (insert == null) {
            insert = new UserBase();
        }
        return insert;
    }

    UserDao getUserDao() {
        if (userDao == null) {
            userDao = new UserDao();
        }
        return userDao;
    }

}
