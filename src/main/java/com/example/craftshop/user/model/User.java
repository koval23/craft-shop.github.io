package com.example.craftshop.user.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "\"user\"")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "email", unique = true, nullable = false)
    private String email;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "lastName", nullable = false)
    private String lastName;
    @Column(name = "password", nullable = false)
    private String password;
    @ElementCollection(targetClass = Role.class)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Enumerated(EnumType.STRING)
    private Set<Role> roles;
    @Lob
    @Column(name = "avatar", columnDefinition = "BLOB")
    private byte[] avatar;

    public User() {
        roles = new HashSet<>();
        roles.add(Role.USER);
    }

    public User(String email, String name, String lastName, String password) {
        this();
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
    }


    public boolean addRole(String role) {
        return roles.add(Role.valueOf(role));
    }

    public boolean removeRole(String role) {
        return roles.remove(Role.valueOf(role));
    }

}
