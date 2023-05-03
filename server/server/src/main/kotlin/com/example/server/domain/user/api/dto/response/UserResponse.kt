package com.example.server.domain.user.api.dto.response

data class UserResponse(
        val userId: String,
        val password: String,
        val name: String,
        val image: String,
)
