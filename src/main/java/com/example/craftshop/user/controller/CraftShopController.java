package com.example.craftshop.user.controller;

import com.example.craftshop.user.dto.UserDto;
import com.example.craftshop.user.dto.UserRegisterDto;
import com.example.craftshop.user.sevice.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/account")
public class CraftShopController {

    final UserService userService;

    @PostMapping("/register")
    public boolean addUser(@RequestBody @Valid UserRegisterDto userRegisterDto) {
        return userService.addUser(userRegisterDto);
    }

    @GetMapping("/user/all")
    public Iterable<UserDto> getAllUsers() {
        return userService.allUsers();
    }
    @PostMapping("/login")
    public UserDto login(Authentication authentication) {
        return userService.getUser(authentication.getName());
    }

}
