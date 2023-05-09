package com.example.server.domain.user.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "tbl_user")
data class User(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long = 0,

        val userId: String,

        val password: String,

        val name: String,

        val image: String
)