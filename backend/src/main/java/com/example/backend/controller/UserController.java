package com.example.backend.controller;

import com.example.backend.service.UserService;
import com.example.backend.dto.UserResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @GetMapping("/{email}")
    public ResponseEntity<UserResponseDto> getMemberInfo(@PathVariable String email) {
        return new ResponseEntity<>(userService.getUserInfo(email), HttpStatus.OK);
    }
}
