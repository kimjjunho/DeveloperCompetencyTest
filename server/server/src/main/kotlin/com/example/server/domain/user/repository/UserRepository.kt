package com.example.server.domain.user.repository

import com.example.server.domain.user.entity.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long> {
    fun findByUserId(userId: String): User?

    fun findUserInfo(): User
}