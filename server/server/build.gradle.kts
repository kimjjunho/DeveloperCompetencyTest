import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.0.5"
    id("io.spring.dependency-management") version "1.1.0"
    kotlin("jvm") version "1.7.22"
    kotlin("plugin.spring") version "1.7.22"
    kotlin("plugin.jpa") version "1.6.21"
    kotlin("plugin.allopen") version "1.6.21"
}

group = "com.example"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
}

dependencies {
    //jpa
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")

    //jwt
    implementation("io.jsonwebtoken:jjwt:0.9.1")

    //redis
    implementation("org.springframework.boot:spring-boot-starter-data-redis")

    //security
    implementation("org.springframework.boot:spring-boot-starter-security")

    //validation
    implementation("org.springframework.boot:spring-boot-starter-validation")

    //web
    implementation("org.springframework.boot:spring-boot-starter-web")

    //kotlin
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    //mysql
    runtimeOnly("mysql:mysql-connector-java:8.0.28")

    //java servlet
    implementation("javax.servlet:javax.servlet-api:4.0.1")

    //processor
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "17"
    }
}
