package com.example.server.domain.game.api.dto.request

import com.fasterxml.jackson.annotation.JsonFormat
import java.time.LocalDate

data class GameResultRequest(
        val name: String,
        val total: Int,
        val correct: Int,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
        val date: LocalDate,
)
