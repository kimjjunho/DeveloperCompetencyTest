package com.example.server.domain.game.api.dto.response

data class TotalGameResultResponse(
        val result: List<TotalGameResult>
) {
    data class TotalGameResult(
            val name: String,
            val average: Float,
    )
}
