package com.example.craftshop.user.controller;

import com.example.craftshop.user.dto.UserDto;
import com.example.craftshop.user.dto.UserRegisterDto;
import com.example.craftshop.user.sevice.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CraftShopController {

    final UserService userService;

    @PostMapping("/user")
    public boolean addUser(@RequestBody UserRegisterDto userRegisterDto) {
        return userService.addUser(userRegisterDto);
    }

    @GetMapping("/user/all")
    public Iterable<UserDto> getAllUsers() {
        return userService.allUsers();
    }

}
