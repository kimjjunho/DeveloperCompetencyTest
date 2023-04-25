package com.example.server.global

import com.example.server.domain.token.RefreshToken
import com.example.server.domain.token.TokenRepository
import com.example.server.global.UserDetailServiceImpl
import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Component
import java.util.*

@Component
class JwtProvider (
        private val jwtProperties: JwtProperties,
        private val tokenRepository: TokenRepository,
        private val userDetailsService: UserDetailServiceImpl
) {
    val ACCESSTOKEN_EXP_TIME: Long = 1000L * 60 * 60
    val REFRESHTOKEN_EXP_TIME: Long = 1000L * 60 * 60 * 24 * 7

    fun createAccessToken(userId: String): String{
        val claims: Claims = Jwts.claims().setSubject(userId)

        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(Date(System.currentTimeMillis() + ACCESSTOKEN_EXP_TIME))
                .signWith(SignatureAlgorithm.HS256, jwtProperties.secret)
                .compact()
    }

    fun createRefreshToken(userId: String): String{
        val claims: Claims = Jwts.claims().setSubject(userId)

        val refreshToken = Jwts.builder()
                .setClaims(claims)
                .setExpiration(Date(System.currentTimeMillis() + REFRESHTOKEN_EXP_TIME))
                .signWith(SignatureAlgorithm.HS256, jwtProperties.secret)
                .compact()

        val redisRefresh = RefreshToken(refreshToken, userId, REFRESHTOKEN_EXP_TIME)
        tokenRepository.save(redisRefresh)

        return refreshToken
    }

    fun validation(token: String): Boolean{
        val claims: Claims = getAllClaims(token)
        val exp: Date = claims.expiration
        return exp.after(Date())
    }

    private fun getAllClaims(token: String): Claims{
        return Jwts.parser()
                .setSigningKey(jwtProperties.secret)
                .parseClaimsJws(token)
                .body
    }

    fun getAuthentication(token: String): Authentication {
        val userDetails: UserDetails = userDetailsService.loadUserByUsername(getAllClaims(token).subject)

        return UsernamePasswordAuthenticationToken(userDetails, "", userDetails.authorities)
    }
}