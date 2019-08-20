package com.telran.rentalCar.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RentalController {
    //get/post data of rental

    @GetMapping("/")
    public String example() {
        return "Hello";
    }
}
