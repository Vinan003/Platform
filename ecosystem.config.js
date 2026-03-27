module.exports = {
    apps: [
        {
            name: "config-server",
            script: "java",
            args: "-jar ./config-server/target/config-server-1.0.0.jar",
            log_file: "./logs/config-server.log",
        },
        {
            name: "service-registry",
            script: "java",
            args: "-jar ./service-registry/target/service-registry-1.0.0.jar",
            log_file: "./logs/service-registry.log",
            restart_delay: 5000,
        },
        {
            name: "api-gateway",
            script: "java",
            args: "-jar ./api-gateway/target/api-gateway-1.0.0.jar",
            log_file: "./logs/api-gateway.log",
            restart_delay: 5000,
        }
    ]
}