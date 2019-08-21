package com.telran.rentalCar.dto.reservation;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Extras {
    int cbsBuster;
    int csiChildSeat;
    int childSeat;
    int roadSafeAssistent;
    int smartfone;
    int underageDriver;
    boolean airportFee;
    boolean vipService;

}
