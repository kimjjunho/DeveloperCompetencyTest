package com.example.server.global

import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

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