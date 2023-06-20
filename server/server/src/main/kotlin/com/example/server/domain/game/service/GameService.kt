package com.example.server.domain.game.service

import com.example.server.domain.game.api.dto.request.GameResultRequest
import com.example.server.domain.game.api.dto.response.GameResultResponse
import com.example.server.domain.game.entity.Game
import com.example.server.domain.game.entity.toResponse
import com.example.server.domain.game.repository.GameRepository
import com.example.server.domain.user.repository.UserRepository
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service

@Service
class GameService(
        private val gameRepository: GameRepository,
        private val userRepository: UserRepository
) {

    fun saveGameResult(gameResultRequest: GameResultRequest) {
        val userId = SecurityContextHolder.getContext().authentication.name
        val user = userRepository.findByUserId(userId) ?: throw RuntimeException()

        val game = with(gameResultRequest) {
            Game(
                    name = this.name,
                    total = this.total,
                    correct = this.correct,
                    date = this.date,
                    user = user
            )
        }
        gameRepository.save(game)
    }

    fun fetchGameResult(): GameResultResponse {
        val userId = SecurityContextHolder.getContext().authentication.name
        val user = userRepository.findByUserId(userId) ?: throw RuntimeException()

        val resultList = gameRepository.findAllByUser(user)

        return GameResultResponse(
                resultList = resultList.map { it.toResponse() }
        )
    }

}