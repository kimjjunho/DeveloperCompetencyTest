package com.example.server.domain.user.api.dto.request

data class SignUpRequest(
        val userId: String,
        val password: String,
        val name: String,
        val image: String,
)