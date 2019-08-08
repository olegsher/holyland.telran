package com.telran.rentalCar.controller;

import com.telran.rentalCar.dto.ApiConstant;
import com.telran.rentalCar.service.albarJson.AlbarJsonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ParserController {
    //parsing sites by request

    @Autowired
    AlbarJsonService albarJson;

//    sendin json of cars from Albar
    @RequestMapping(value = ApiConstant.GET_ALL_CARS, method = RequestMethod.GET, produces = "application/json")
    String getAllCars() {
        return albarJson.getAllCars();
    }

}
