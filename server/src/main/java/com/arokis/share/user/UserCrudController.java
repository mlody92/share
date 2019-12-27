package com.arokis.share.user;

import com.arokis.general.controller.CrudBaseController;
import com.arokis.general.exception.OperationException;
import com.arokis.general.json.ResponseJson;
import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserDao;
import com.arokis.share.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Validated
@RestController
public class UserCrudController extends CrudBaseController<User> {

    private UserBase userBase;

    @Autowired
    private UserDao userDao;

    @Autowired
    private UserRepository repository;

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
        if (!logged.getPassword().equals(new BCryptPasswordEncoder().encode(user.getPassword()))) {
            throw new OperationException("Nieprawidłowe hasło użytkownika.");
        }
        return new ResponseEntity<String>(ResponseJson.success("Operacja logowania przebiegła pomyślnie."), HttpStatus.OK);
    }

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

    private UserDao getUserDao() {
        if (userDao == null) {
            userDao = new UserDao();
        }
        return userDao;
    }

}
