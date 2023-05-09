package com.example.server.domain.game.entity

import com.example.server.domain.game.api.dto.response.GameResultResponse
import java.time.LocalDate
import javax.persistence.*

@Entity
@Table(name = "tbl_game")
data class Game(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        val name: String,

        val total: Int,

        val correct: Int,

        val date: LocalDate,
)


fun Game.toResponse() =
        GameResultResponse.GameResult(
                name = this.name,
                total = this.total,
                correct = this.correct,
                date = this.date,
        )