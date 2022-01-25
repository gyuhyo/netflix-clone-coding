package com.example.backend.dto;

import com.example.backend.entity.Authority;
import com.example.backend.entity.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
    private String email;

    public static UserResponseDto of(User user) {
        return new UserResponseDto(user.getEmail());
    }
}
