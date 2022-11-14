package com.microservicios.microserviciomedicamento;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MicroservicioMedicamentoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroservicioMedicamentoApplication.class, args);
	}

}
