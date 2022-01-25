package com.example.dto;

import com.example.backend.entity.Authority;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserResponseDto {
    private String email;

    private String password;

    private Authority authority;
}
