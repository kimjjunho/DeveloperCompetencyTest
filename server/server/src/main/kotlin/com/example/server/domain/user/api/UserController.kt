package com.example.server.domain.user.api

import com.example.server.domain.user.api.dto.request.SignupRequest
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
    @PostMapping
    fun signup(@Valid @RequestBody signupRequest: SignupRequest) {
        userService.signup(signupRequest)
    }
}