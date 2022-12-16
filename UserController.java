package com.example.trains.controller;

import com.example.trains.entity.User;
import com.example.trains.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestParam String userName, @RequestParam String password){
        User user=userService.login(userName,password);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
}
