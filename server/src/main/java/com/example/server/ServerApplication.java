package com.example.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // @ComponentScan + @Configuration + @EnableAutoConfiguration
public class ServerApplication {
	public static void main(String[] args) {
		System.out.println("hello backend");
		SpringApplication.run(ServerApplication.class, args);
	}
}