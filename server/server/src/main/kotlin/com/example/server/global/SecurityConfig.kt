package com.example.server.global

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.factory.PasswordEncoderFactories
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@Configuration
@EnableWebSecurity
class SecurityConfig(
        private val jwtProvider: JwtProvider
) {
    @Bean
    fun filterChain(http: HttpSecurity) : SecurityFilterChain{
        http
                .cors()
                .and()
                .csrf().disable()

                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .authorizeHttpRequests()
                .antMatchers("/user/**").permitAll()
                .antMatchers("/game/**").authenticated()
                .anyRequest().authenticated()

                .and()
                .addFilterBefore(JwtFilter(jwtProvider), UsernamePasswordAuthenticationFilter::class.java)
        return http.build()
    }

    @Bean
    fun passwordEncoder() : PasswordEncoder{
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}