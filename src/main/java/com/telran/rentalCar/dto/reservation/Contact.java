package com.telran.rentalCar.dto.reservation;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Contact {
    String email;
    String phoneNumber;
    String country;
}
