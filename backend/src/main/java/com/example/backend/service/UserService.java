package com.example.backend.service;

import com.example.backend.dto.UserResponseDto;

public interface UserService {

    UserResponseDto getUserInfo(String email);
}
