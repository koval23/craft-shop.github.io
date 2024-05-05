package com.example.craftshop.user.dto;

import com.example.craftshop.user.model.Role;
import lombok.*;

import java.util.Set;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private String email;
    private String name;
    private String lastName;
    private byte[] avatar;
    @Singular
    private Set<Role> roles;

}
