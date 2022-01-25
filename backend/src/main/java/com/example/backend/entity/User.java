package com.example.backend.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@NoArgsConstructor
@Table(name = "users")
@Entity
public class User {

    @Id
    @Column(name = "user_id")
    private String userId;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "birth")
    private Date birth;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Column(name = "joinAt")
    private LocalDateTime joinAt;

    @Builder
    public User(String userId,
                String email,
                String password,
                String nickname,
                Date birth,
                Authority authority,
                LocalDateTime joinAt) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.birth = birth;
        this.authority = authority;
        this.joinAt = joinAt;
    }
}
