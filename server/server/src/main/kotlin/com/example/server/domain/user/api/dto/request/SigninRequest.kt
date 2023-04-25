package com.example.server.domain.user.api.dto.request

data class SigninRequest(
        val userId: String,
        val password: String,
)
