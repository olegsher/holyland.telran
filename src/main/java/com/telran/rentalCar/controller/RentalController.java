package com.telran.rentalCar.controller;

import com.telran.rentalCar.dto.reservation.RentData;
import com.telran.rentalCar.dto.reservation.ReservData;
import com.telran.rentalCar.service.Sender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RentalController {
    //get/post data of rental
    @Autowired
    Sender sender;

    @PostMapping("/reserv")
    public boolean rental(@RequestBody ReservData reservData){
       return sender.send(reservData);


    }
}
