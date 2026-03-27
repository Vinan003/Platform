module.exports = {
    apps: [
        {
            name: "config-server",
            script: "java",
            args: "-jar ./FileShare-Platform-Config-Server/target/config-server-1.0.0.jar",
            out_file: "./logs/config-server.log",
            error_file: "./logs/config-server-error.log",
            autorestart: true,
            restart_delay: 5000
        },
        {
            name: "service-registry",
            script: "java",
            args: "-jar ./FileShare-Platform-Service-Registry/target/service-registry-1.0.0.jar",
            out_file: "./logs/service-registry.log",
            error_file: "./logs/service-registry-error.log",
            autorestart: true,
            restart_delay: 10000 
        },
        {
            name: "api-gateway",
            script: "java",
            args: "-jar ./FileShare-Platform-Api-Gateway/target/api-gateway-1.0.0.jar",
            out_file: "./logs/api-gateway.log",
            error_file: "./logs/api-gateway-error.log",
            autorestart: true,
            restart_delay: 15000 
        }
    ]
}
