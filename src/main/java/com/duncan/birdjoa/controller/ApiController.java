package com.duncan.birdjoa.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

	@GetMapping("/api/getNow")
	public String getNow() {
		return "걍 스프링에서 벅벅";
	}

}