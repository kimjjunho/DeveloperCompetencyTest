package com.example.server.domain.game.service

import com.example.server.domain.game.api.dto.request.GameResultRequest
import com.example.server.domain.game.api.dto.response.GameResultResponse
import com.example.server.domain.game.entity.Game
import com.example.server.domain.game.entity.toResponse
import com.example.server.domain.game.repository.GameRepository
import org.springframework.stereotype.Service

@Service
class GameService(
        private val gameRepository: GameRepository,
) {

    fun saveGameResult(gameResultRequest: GameResultRequest) {
        val game = with(gameResultRequest) {
            Game(
                    name = this.name,
                    total = this.total,
                    correct = this.correct,
                    date = this.date,
            )
        }
        gameRepository.save(game)
    }

    fun fetchGameResult(): GameResultResponse {
        val resultList = gameRepository.findAll()

        return GameResultResponse(
                resultList = resultList.map { it.toResponse() }
        )
    }

}