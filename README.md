# FileShare Platform

A Spring Cloud microservices infrastructure platform providing centralized configuration, service discovery, and API routing for the FileShare application.

## Architecture

Client / Frontend
        |
        v
API Gateway (:7000)
        |
        v
Service Registry (:8761)
        |
        +--> Student Service
        +--> Program Service
        +--> Enrollment Service

Config Server (:9000)
        |
        +--> API Gateway
        +--> Service Registry
        +--> Domain Services

## Platform Components

| Component | Port | Responsibility |
|---|---:|---|
| Config Server | 9000 | Centralized application configuration |
| Service Registry | 8761 | Service discovery with Netflix Eureka |
| API Gateway | 7000 | Central entry point and request routing |

## API Gateway

The API Gateway is built with Spring Cloud Gateway and acts as the single entry point for client requests.

Current routes include:

| Route | Target |
|---|---|
| /api/v1/students/** | lb://STUDENT-SERVICE |
| /api/v1/programs/** | lb://PROGRAM-SERVICE |
| /api/v1/enrollments/** | lb://ENROLLMENT-SERVICE |

The gateway uses JWT-based authentication through the JWT_SECRET environment variable.

## Technology Stack

- Java 24
- Spring Boot 4
- Spring Cloud 2025.1.0
- Spring Cloud Gateway
- Spring Cloud Config
- Netflix Eureka
- Maven
- PM2
- JWT

## Repository Structure

Platform/
├── FileShare-Platform-Api-Gateway/
├── FileShare-Platform-Config-Server/
├── FileShare-Platform-Service-Registry/
├── ecosystem.config.js
├── pom.xml
├── .gitmodules
└── .gitignore

The three platform components are maintained as Git submodules.

## Startup Order

1. Config Server - 9000
2. Service Registry - 8761
3. API Gateway - 7000
4. Domain microservices

The Service Registry depends on the Config Server during startup. The API Gateway depends on configuration and service discovery.

## Prerequisites

- JDK 24
- Maven or Maven Wrapper
- Git
- Node.js and PM2

## Clone

Clone the repository together with its submodules:

    git clone --recurse-submodules https://github.com/Vinan003/Platform.git
    cd Platform

If the repository was cloned without submodules:

    git submodule update --init --recursive

## Build

Build all platform modules from the root project:

    ./mvnw clean package -DskipTests

On Windows:

    mvnw.cmd clean package -DskipTests

## Run Individual Services

### Config Server

    cd FileShare-Platform-Config-Server
    ./mvnw spring-boot:run

### Service Registry

    cd FileShare-Platform-Service-Registry
    ./mvnw spring-boot:run

### API Gateway

    cd FileShare-Platform-Api-Gateway
    ./mvnw spring-boot:run

## Environment Variables

Sensitive configuration is not committed to the repository.

The API Gateway expects:

    JWT_SECRET=<your-secret>

Set the environment variable before starting the API Gateway.

Never commit real credentials, API keys, JWT secrets, passwords, or private keys to the repository.

## PM2

The root repository includes ecosystem.config.js for running the built Spring Boot applications under PM2.

The configured applications are:

- config-server
- service-registry
- api-gateway

Build the applications first, then start them with:

    pm2 start ecosystem.config.js

Check the running processes:

    pm2 status

## Configuration Repository

The Config Server retrieves shared configuration from the dedicated configuration repository:

Fileshare-Platform-Project-Configurations

Application secrets should remain outside source control and should be supplied through environment variables or an appropriate secret-management system.

## Security

This repository is intended to contain application infrastructure and non-sensitive configuration only.

Sensitive values must be supplied through environment variables or a dedicated secret-management solution.

The following are intentionally excluded from version control:

- .env files
- Log files
- Build output
- Runtime files
- IDE configuration
- Secrets and credentials

## Project Background

This project was developed as part of an Enterprise Cloud Application module and demonstrates a Spring Cloud microservices architecture using centralized configuration, service discovery, and an API gateway.

## License

This project does not currently specify an open-source license.
