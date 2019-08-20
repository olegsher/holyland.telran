package com.telran.rentalCar.dto.reservation;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class RentData {
    private String placeOfRent;
    private String placeOfReturn;
    private String pickDate;
    private String pickTime;
    private String returnDate;
    private String returnTime;
    private String driversAge;
    private int driverExperience;
    private String carCategories;

}
