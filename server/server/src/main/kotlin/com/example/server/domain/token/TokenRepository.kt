package com.example.server.domain.token

import org.springframework.data.repository.CrudRepository

interface TokenRepository : CrudRepository<RefreshToken, String>{

}