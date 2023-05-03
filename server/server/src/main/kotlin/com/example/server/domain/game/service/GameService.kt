package com.example.server.domain.game.service

import com.example.server.domain.game.api.dto.request.GameResultRequest
import com.example.server.domain.game.api.dto.response.GameResultResponse
import com.example.server.domain.game.entity.Game
import com.example.server.domain.game.entity.toResponse
import com.example.server.domain.game.repository.GameRepository
import com.example.server.global.JwtProvider
import org.springframework.stereotype.Service

@Service
class GameService(
        private val gameRepository: GameRepository,
        private val jwtProvider: JwtProvider,
) {

    fun saveGameResult(gameResultRequest: GameResultRequest) {
        val game = Game(
                name = gameResultRequest.name,
                total = gameResultRequest.total,
                correct = gameResultRequest.correct,
                date = gameResultRequest.date,
        )
        gameRepository.save(game)
    }

    fun fetchGameResult(): GameResultResponse {
        val resultList = gameRepository.findAll()

        return GameResultResponse(
                resultList = resultList.map { it.toResponse() }
        )
    }

}