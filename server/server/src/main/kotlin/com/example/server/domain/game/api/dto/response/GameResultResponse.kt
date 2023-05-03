package com.example.server.domain.game.api.dto.response

import java.time.LocalDate

data class GameResultResponse (
        val resultList: List<GameResult>
) {
    data class GameResult(
            val name: String,
            val total: Int,
            val correct: Int,
            val date: LocalDate,
    )
}

