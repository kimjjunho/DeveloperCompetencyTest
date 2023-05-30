package com.example.server.domain.user.service

import com.example.server.domain.user.api.dto.request.SignInRequest
import com.example.server.domain.user.api.dto.request.SignUpRequest
import com.example.server.domain.user.api.dto.response.TokenResponse
import com.example.server.domain.user.entity.User
import com.example.server.domain.user.repository.UserRepository
import com.example.server.global.jwt.JwtProvider
import org.springframework.stereotype.Service
import java.lang.RuntimeException

@Service
class UserService(
        private val userRepository: UserRepository,
        private val jwtProvider: JwtProvider,
) {

    fun signup(signupRequest: SignUpRequest) {
        val user = User(
                userId = signupRequest.userId,
                password = signupRequest.password,
                name = signupRequest.name,
                image = signupRequest.image,
        )

        userRepository.save(user)
    }

    fun signIn(signInRequest: SignInRequest): TokenResponse {
        val user = userRepository.findByUserId(signInRequest.userId)
                ?: throw RuntimeException()

        if (user.password != signInRequest.password) {
            throw RuntimeException()
        }

        val access = jwtProvider.createAccessToken(user.userId)
        val refresh = jwtProvider.createRefreshToken(user.userId)

        return TokenResponse(
                accessToken = access,
                refreshToken = refresh,
        )
    }

    fun getProfile(userId: String) = userRepository.findByUserId(userId) ?: throw RuntimeException()
}