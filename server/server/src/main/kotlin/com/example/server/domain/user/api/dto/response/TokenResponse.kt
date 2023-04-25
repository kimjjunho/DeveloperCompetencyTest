package com.example.server.domain.user.api.dto.response

data class TokenResponse(
        val accessToken: String,
        val refreshToken: String,
)
