package com.arokis.share.user;

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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@Validated
@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserDao userDao;

    @GetMapping("/users")
    public List<User> getAllUser(Pageable pageable) {
        Page<User> all = repository.findAll(pageable);
        return all.getContent();
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

    protected JpaRepository getRepository() {
        return repository;
    }

    private UserDao getUserDao() {
        if (userDao == null) {
            userDao = new UserDao();
        }
        return userDao;
    }

}
