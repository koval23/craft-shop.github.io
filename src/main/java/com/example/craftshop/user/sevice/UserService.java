package com.example.craftshop.user.sevice;

import com.example.craftshop.user.dto.UserDto;
import com.example.craftshop.user.dto.UserRegisterDto;

public interface UserService {

    boolean addUser(UserRegisterDto userRegisterDto);

    UserRegisterDto removeUser(String email);

    UserDto updateUser(String email, UserRegisterDto userRegisterDto);

    UserDto getUser(String email);

    Iterable<UserDto> allUsers();


}
