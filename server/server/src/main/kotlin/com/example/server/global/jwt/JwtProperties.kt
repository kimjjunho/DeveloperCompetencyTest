package com.example.server.global.jwt

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConfigurationPropertiesBinding
import org.springframework.boot.context.properties.ConstructorBinding
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Component


// TODO: 손재민 박휘응이 빨간줄 없앰

@ConstructorBinding
@ConfigurationProperties(prefix = "jwt")
data class JwtProperties (
        val secret: String
)