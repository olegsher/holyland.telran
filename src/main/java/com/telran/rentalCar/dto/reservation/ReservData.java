package com.telran.rentalCar.dto.reservation;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class ReservData {
    private String country;
    private String vehicleType;
    private boolean confirmation;
    private String companyName;
    private Client client;
    private Contact contact;
    private RentData rentData;
    private Protection protection;
    private Extras extras;
    private int sum;
}
