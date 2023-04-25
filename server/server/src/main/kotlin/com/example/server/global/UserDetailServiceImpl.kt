package com.example.server.global

import com.example.server.domain.user.entity.User
import com.example.server.domain.user.repository.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Component

@Component
class UserDetailServiceImpl(private val userRepository: UserRepository): UserDetailsService {
    // TODO : 예외처리로 변경
    override fun loadUserByUsername(username: String): UserDetails {
        val user: User = userRepository.findByUserId(username) ?: User(0,"","","", "")

        return UserDetailsImpl(user)
    }
}