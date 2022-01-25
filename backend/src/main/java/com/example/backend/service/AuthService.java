package com.example.backend.service;

import com.example.backend.dto.TokenDto;
import com.example.backend.dto.TokenRequestDto;
import com.example.backend.dto.UserRequestDto;
import com.example.backend.dto.UserResponseDto;

public interface AuthService {
    UserResponseDto signup(UserRequestDto userRequestDto);

    TokenDto login(UserRequestDto userRequestDto);

    TokenDto reissue(TokenRequestDto tokenRequestDto);
}
