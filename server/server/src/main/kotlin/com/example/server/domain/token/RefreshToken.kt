package com.example.server.domain.token

import jakarta.persistence.Id
import org.springframework.data.redis.core.RedisHash
import org.springframework.data.redis.core.TimeToLive
import org.springframework.data.redis.core.index.Indexed

@RedisHash
data class RefreshToken(
        @Id
        val token: String?,

        @Indexed
        val userId: String?,

        @TimeToLive
        val expiration: Long,

)
