package com.example.server

import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@ConfigurationPropertiesScan("com.example.server")
@SpringBootApplication
class ServerApplication

fun main(args: Array<String>) {
    runApplication<ServerApplication>(*args)
}
