package com.example.server.domain.user.service

import com.example.server.domain.user.api.dto.request.SigninRequest
import com.example.server.domain.user.api.dto.request.SignupRequest
import com.example.server.domain.user.api.dto.response.TokenResponse
import com.example.server.domain.user.entity.User
import com.example.server.domain.user.repository.UserRepository
import com.example.server.global.JwtProvider
import org.springframework.stereotype.Service

@Service
class UserService(
        private val userRepository: UserRepository,
        private val jwtProvider: JwtProvider,
) {

    fun signup(signupRequest: SignupRequest) {
        val user = User(
                userId = signupRequest.userId,
                password = signupRequest.password,
                name = signupRequest.name,
                image = signupRequest.image,
        )

        userRepository.save(user)
    }

    fun signin(signinRequest: SigninRequest): TokenResponse {
        val user = userRepository.findByUserId(signinRequest.userId)
        if (!user?.password.equals(signinRequest.password)) {
            //TODO: 예외처리
        }

        val access = jwtProvider.createAccessToken(user?.userId!!)
        val refresh = jwtProvider.createRefreshToken(user.userId)

        return TokenResponse(
                accessToken = access,
                refreshToken = refresh,
        )
    }

}