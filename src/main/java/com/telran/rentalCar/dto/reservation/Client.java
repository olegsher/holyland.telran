package com.telran.rentalCar.dto.reservation;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Client {
    String name;
    String surname;
    String citizenship;
    boolean creditCard;
}
