module.exports = {
  apps: [
    {
      name: "config-server",
      script: "java",
      args: "-jar ./FileShare-Platform-Config-Server/target/config-server-1.0.0.jar",
      log_file: "./logs/config-server.log",
      restart_delay: 5000
    },
    {
      name: "service-registry",
      script: "java",
      args: "-jar ./FileShare-Platform-Service-Registry/target/service-registry-1.0.0.jar",
      log_file: "./logs/service-registry.log",
      restart_delay: 5000
    },
    {
      name: "api-gateway",
      script: "java",
      args: "-jar ./FileShare-Platform-Api-Gateway/target/api-gateway-1.0.0.jar",
      log_file: "./logs/api-gateway.log",
      restart_delay: 5000
    }
  ]
}