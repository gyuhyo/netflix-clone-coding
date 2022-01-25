package com.example.backend.dto;

import com.example.backend.entity.Authority;
import com.example.backend.entity.User;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDto {

    private String userId;

    @NotNull(message = "이메일을 입력해주세요.")
    @Email(message = "이메일 형식과 일치하지 않습니다.")
    private String email;

    @NotNull(message = "비밀번호를 입력해주세요.")
    @Size(min = 8, message = "비밀번호는 8자리 이상 입력해주세요.")
    private String password;

    @NotNull(message = "닉네임을 입력해주세요.")
    @Size(min = 2, message = "닉네임은 두글자 이상 입력해주세요.")
    private String nickname;

    @Past(message = "정확한 생년월일을 입력해주세요.")
    private Date birth;

    public User toMember(PasswordEncoder passwordEncoder) {
        return User.builder()
                .userId(UUID.randomUUID().toString())
                .email(email)
                .password(passwordEncoder.encode(password))
                .nickname(nickname)
                .birth(birth)
                .authority(Authority.ROLE_USER)
                .joinAt(LocalDateTime.now())
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(email, password);
    }
}