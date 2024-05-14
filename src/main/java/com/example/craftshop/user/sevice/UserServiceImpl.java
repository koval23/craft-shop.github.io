package com.example.craftshop.user.sevice;

import com.example.craftshop.configuration.AvatarGenerator;
import com.example.craftshop.user.dao.UserRepository;
import com.example.craftshop.user.dto.UserDto;
import com.example.craftshop.user.dto.UserRegisterDto;
import com.example.craftshop.user.dto.exceptions.UserExistsException;
import com.example.craftshop.user.dto.exceptions.UserNotFoundException;
import com.example.craftshop.user.model.Role;
import com.example.craftshop.user.model.UserAccount;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, CommandLineRunner {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public boolean addUser(UserRegisterDto userRegisterDto) {

        userRepository.findByEmail(userRegisterDto.getEmail())
                .ifPresent(userAccount -> {
                    throw new UserExistsException();
                });

        String password = passwordEncoder.encode(userRegisterDto.getPassword());
        userRegisterDto.setPassword(password);

        UserAccount userAccount = modelMapper.map(userRegisterDto, UserAccount.class);
        userAccount.setAvatar(generateAndSetAvatar(userRegisterDto.getName(), userRegisterDto.getLastName()));
        userRepository.save(userAccount);
        return true;
    }

    @Override
    public UserDto getUser(String email) {
        UserAccount userAccount = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
        return modelMapper.map(userAccount, UserDto.class);
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
    public Iterable<UserDto> allUsers() {
        return userRepository.findAll().stream()
                .map(userAccount -> modelMapper.map(userAccount, UserDto.class))
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

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.findByEmail("admin@gmail.com").isPresent()) {
            String password = passwordEncoder.encode("admin");
            UserAccount userAccount = new UserAccount("admin@gmail.com", "admin", "admin", password);
            userAccount.addRole(Role.MODERATOR.name());
            userAccount.addRole(Role.ADMINISTRATOR.name());
            userRepository.save(userAccount);
        }
    }
}
