package com.example.server.domain.game.repository

import com.example.server.domain.game.entity.Game
import org.springframework.data.jpa.repository.JpaRepository

interface GameRepository : JpaRepository<Game, Long> {
}