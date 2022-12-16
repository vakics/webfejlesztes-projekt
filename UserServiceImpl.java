package com.example.trains.service.impl;

import com.example.trains.entity.User;
import com.example.trains.repository.UserRepository;
import com.example.trains.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();


    @Override
    public User login(String userName, String password) {
        User user= userRepository.findByUserName(userName);
        if (bCryptPasswordEncoder.matches(user.getPassword(),bCryptPasswordEncoder.encode(password))) {
            return user;
        }
        return null;
    }
}
