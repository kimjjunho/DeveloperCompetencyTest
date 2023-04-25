package com.example.server.domain.user.api

import com.example.server.domain.user.api.dto.request.SigninRequest
import com.example.server.domain.user.api.dto.request.SignupRequest
import com.example.server.domain.user.api.dto.response.TokenResponse
import com.example.server.domain.user.service.UserService
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RequestMapping("/user")
@RestController
class UserController(
        private val userService: UserService,
) {
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/signup")
    fun signup(@Valid @RequestBody signupRequest: SignupRequest) =
            userService.signup(signupRequest = signupRequest)


    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/signin")
    fun signin(@Valid @RequestBody signinRequest: SigninRequest): TokenResponse =
            userService.signin(signinRequest = signinRequest)
}