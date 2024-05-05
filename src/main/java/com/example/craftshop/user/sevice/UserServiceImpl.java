package com.example.craftshop.user.sevice;

import com.example.craftshop.configuration.AvatarGenerator;
import com.example.craftshop.user.dao.UserRepository;
import com.example.craftshop.user.dto.UserRegisterDto;
import com.example.craftshop.user.dto.UserDto;
import com.example.craftshop.user.exceptions.UserAlreadyExistsException;
import com.example.craftshop.user.model.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    final UserRepository userRepository;
    final ModelMapper modelMapper;

    @Override
    public boolean addUser(UserRegisterDto userRegisterDto) {
        if (userRegisterDto.getEmail() == null || userRegisterDto.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email must not be null or empty");
        }
        if (userRepository.findByEmail(userRegisterDto.getEmail()) != null) {
            throw new UserAlreadyExistsException("User with email " + userRegisterDto.getEmail() + " already exists");
        }
        if (userRegisterDto.getLastName() == null || userRegisterDto.getLastName().trim().isEmpty() ||
                userRegisterDto.getName() == null || userRegisterDto.getName().trim().isEmpty() ||
                userRegisterDto.getPassword() == null || userRegisterDto.getPassword().trim().isEmpty()) {
            throw new IllegalArgumentException("All mandatory fields (name, lastName, password) must be provided");
        }
        User user = modelMapper.map(userRegisterDto, User.class);
        user.setAvatar(generateAndSetAvatar(userRegisterDto.getName(), userRegisterDto.getLastName()));
        userRepository.save(user);
        return true;
    }


    @Override
    public UserRegisterDto removeUser(String email) {
        return null;
    }

    @Override
    public UserDto updateUser(String email, UserRegisterDto userRegisterDto) {
        return null;
    }

    @Override
    public UserRegisterDto findUser(String email) {
        return null;
    }

    @Override
    public Iterable<UserDto> allUsers() {
        return userRepository.findAll().stream()
                .map(user -> modelMapper.map(user, UserDto.class))
                .toList();
    }

    private byte[] generateAndSetAvatar(String name, String lastName) {
        String initials = name.substring(0, 1).toUpperCase() + lastName.substring(0, 1).toUpperCase();
        try {
            return AvatarGenerator.generateAvatar(initials);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
