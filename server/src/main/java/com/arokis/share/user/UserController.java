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
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.List;

import static org.springframework.security.web.context.HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY;

@Validated
@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserDao userDao;

//    @Autowired
//    private AuthenticationManager authenticationManager;

    @GetMapping("/")
    public ResponseEntity hello() {
        return new ResponseEntity<String>(ResponseJson.success("hello"), HttpStatus.OK);
    }

    @GetMapping("/secured")
    public ResponseEntity helloSecured() {
        return new ResponseEntity<String>(ResponseJson.success("secured"), HttpStatus.OK);
    }

    @GetMapping("/users")
    public List<User> getAllUser(Pageable pageable) {
        System.out.println("11111111111111111111");
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName(); //get logged in username
        System.out.println(name);
        Page<User> all = repository.findAll(pageable);
        return all.getContent();
    }

    @GetMapping("/users2")
    public List<User> getAllUser2(Pageable pageable) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName(); //get logged in username
        System.out.println(name);
        Page<User> all = repository.findAll(pageable);
        return all.getContent();
    }

//    @RequestMapping(value = "/user/signin", method = RequestMethod.POST)
//    public ResponseEntity signin(@RequestBody User user, HttpSession session) throws OperationException {
//        User logged = getUserDao().get(user.getEmail());
//        if (logged == null) {
//            throw new OperationException("Brak podanego użytkownika.");
//        }
//
//        try {
//            Authentication token = new UsernamePasswordAuthenticationToken(logged.getEmail(), logged.getPassword());
//            Authentication result = authenticationManager.authenticate(token);
//            SecurityContextHolder.getContext().setAuthentication(result);
//        } catch(AuthenticationException e) {
//            System.out.println("Authentication failed: " + e.getMessage());
//        }
//        //        org.springframework.security.core.userdetails.User loggedInUser = (org.springframework.security.core.userdetails.User) authentication.getPrincipal();
////        if (!logged.getPassword().equals(new BCryptPasswordEncoder().encode(user.getPassword()))) {
////            throw new OperationException("Nieprawidłowe hasło użytkownika.");
////        }
//        return new ResponseEntity<String>(ResponseJson.success("Operacja logowania przebiegła pomyślnie."), HttpStatus.OK);
//    }




    @RequestMapping(value = "/logmeout", method = RequestMethod.POST)
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login";
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
