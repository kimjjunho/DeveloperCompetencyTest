package com.example.server.domain.user.api.dto.request

data class SignupRequest(
        val userId: String,
        val password: String,
        val name: String,
        val image: String,
)