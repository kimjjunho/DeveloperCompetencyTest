package com.example.server.global

import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component

@Component
class SecurityUtil {
    fun getUserId(): String {
        return SecurityContextHolder.getContext().authentication.name
    }
}