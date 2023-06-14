package com.example.server.domain.user.api

import com.example.server.domain.user.api.dto.request.SignInRequest
import com.example.server.domain.user.api.dto.request.SignUpRequest
import com.example.server.domain.user.api.dto.response.TokenResponse
import com.example.server.domain.user.api.dto.response.UserResponse
import com.example.server.domain.user.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

@RequestMapping("/user")
@RestController
class UserController(
        private val userService: UserService,
) {
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/signup")
    fun signUp(@Valid @RequestBody signupRequest: SignUpRequest) =
            userService.signup(signupRequest = signupRequest)


    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/signin")
    fun signIn(@Valid @RequestBody signInRequest: SignInRequest): TokenResponse =
            userService.signIn(signInRequest = signInRequest)

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/information/{userId}")
    fun getProfile(@PathVariable("userId") userId: String): UserResponse {
        val user = userService.getProfile(userId)
        return UserResponse(
                userId = user.userId,
                password = user.password,
                name = user.name,
                image = user.image
        )
    }
}