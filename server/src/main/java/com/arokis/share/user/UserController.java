package com.arokis.share.user;

import com.arokis.general.json.ResponseJson;
import com.arokis.share.user.model.User;
import com.arokis.share.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/add")
    public String addUser() {
        return "/user/add";
    }

    @RequestMapping(value = "/user/save", method = RequestMethod.POST)
    public String saveUser(@ModelAttribute("user") User user) {
        user.setDateCreate(LocalDateTime.now());
        user.setActive(false);
        user.setEmail("test@test");
        user.setName("name");
        user.setSurname("surname");
        user.setPassword("pp");
        user.setPermission_id(1);
//        userRepository.save(user);
        return "redirect:/users";
    }

    @RequestMapping(value = "/user/save2", method = RequestMethod.POST)
    public String saveUser2(@Valid UserForm form, BindingResult bindingResult, Model model) {
        System.out.println(form.getEmail());
        if (bindingResult.hasErrors()) {
            bindingResult.getAllErrors().forEach(System.out::println);
            return "/user/add";
        }
        return "redirect:/users";
    }
}
