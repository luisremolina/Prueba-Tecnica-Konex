package com.microservicios.microservicioventas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.sql.init.SqlInitializationAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication()
 @EnableEurekaClient
public class MicroservicioVentasApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroservicioVentasApplication.class, args);
	}

}
