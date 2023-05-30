package com.example.server.global.authentication

import com.example.server.domain.user.entity.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

class UserDetailsImpl(val user: User): UserDetails {
    override fun getAuthorities(): MutableCollection<out GrantedAuthority> = arrayListOf(SimpleGrantedAuthority(null))

    override fun getPassword(): String = user.password

    override fun getUsername(): String = user.userId

    override fun isAccountNonExpired(): Boolean = true

    override fun isAccountNonLocked(): Boolean = true

    override fun isCredentialsNonExpired(): Boolean = true

    override fun isEnabled(): Boolean = true
}