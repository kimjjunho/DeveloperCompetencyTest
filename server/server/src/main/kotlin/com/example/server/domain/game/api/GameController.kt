package com.example.server.domain.game.api

import com.example.server.domain.game.api.dto.request.GameResultRequest
import com.example.server.domain.game.api.dto.response.GameResultResponse
import com.example.server.domain.game.service.GameService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

@RequestMapping("/game")
@RestController
class GameController(
        private val gameService: GameService,
) {
    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    fun saveGameResult(@Valid @RequestBody gameResultRequest: GameResultRequest) =
            gameService.saveGameResult(gameResultRequest = gameResultRequest)

    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    fun fetchGameResult(): GameResultResponse = gameService.fetchGameResult()
}