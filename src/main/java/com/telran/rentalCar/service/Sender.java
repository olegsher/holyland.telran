package com.telran.rentalCar.service;

import com.telran.rentalCar.dto.reservation.RentData;
import com.telran.rentalCar.dto.reservation.ReservData;

public interface Sender {
    //change the data type and input data
   boolean send(ReservData reservData);
}
