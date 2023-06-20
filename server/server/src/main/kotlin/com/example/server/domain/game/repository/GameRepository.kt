package com.example.server.domain.game.repository

import com.example.server.domain.game.entity.Game
import com.example.server.domain.user.entity.User
import org.springframework.data.jpa.repository.JpaRepository

interface GameRepository : JpaRepository<Game, Long> {
    fun findAllByUser(user: User): List<Game>
}