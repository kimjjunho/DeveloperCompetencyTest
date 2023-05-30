package com.example.server.domain.user.api.dto.request

data class SignInRequest(
        val userId: String,
        val password: String,
)
