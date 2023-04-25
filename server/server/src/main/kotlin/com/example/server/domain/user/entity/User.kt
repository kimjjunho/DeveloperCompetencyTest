package com.example.server.domain.user.entity

import jakarta.persistence.*
import org.jetbrains.annotations.NotNull

@Entity
@Table(name = "tbl_user")
class User(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        val userId: String,

        password: String,

        val name: String,

        val image: String
) {

        @field: NotNull
        var password = password
                protected set
}
