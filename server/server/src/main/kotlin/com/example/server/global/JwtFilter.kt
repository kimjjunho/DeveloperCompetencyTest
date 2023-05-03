package com.example.server.global

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter

@Component
class JwtFilter (
        private val jwtProvider: JwtProvider
) : OncePerRequestFilter(){
    override fun doFilterInternal(
            request: HttpServletRequest,
            response: HttpServletResponse,
            filterChain: FilterChain
    ) {
        val authenticationHeader: String = request.getHeader("Authorization") ?: return filterChain.doFilter(request, response)
        val token = authenticationHeader.substring("Bearer ".length)
        if(jwtProvider.validation(token)){
            val authentication: Authentication = jwtProvider.getAuthentication(token)
            SecurityContextHolder.getContext().authentication = authentication
        }

        filterChain.doFilter(request, response)
    }
}