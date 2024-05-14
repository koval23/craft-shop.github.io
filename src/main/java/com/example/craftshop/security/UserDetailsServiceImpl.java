package com.example.craftshop.security;

import com.example.craftshop.user.model.UserAccount;
import com.example.craftshop.user.dao.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    final UserRepository userRepository;

    // Переопределение метода loadUserByUsername, который определен в интерфейсе UserDetailsService.
    // Этот метод получает имя пользователя и возвращает объект UserDetails, содержащий информацию о пользователе.
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Поиск объекта UserAccount в базе данных по имени пользователя.
        // Если пользователь не найден, выбрасывается исключение UsernameNotFoundException.
        UserAccount userAccount = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));


        // Получение списка ролей (авторизаций) пользователя из объекта UserAccount.
        // Сначала из ролей извлекаются их имена и добавляется префикс "ROLE_".
        Collection<String> authorities = userAccount.getRoles()
                .stream()
                .map(r -> "ROLE_" + r.name()) // Префикс "ROLE_" добавляется согласно требованиям Spring Security.
                .toList();

        // Создание объекта User (из Spring Security) с данными пользователя:
        // - email пользователя (email),
        // - паролем (userAccount.getPassword()),
        // - списком ролей/привилегий (AuthorityUtils.createAuthorityList(authorities)).
        // Объект User также реализует интерфейс UserDetails.
        return new User(email, userAccount.getPassword(), AuthorityUtils.createAuthorityList(authorities));
    }
}

