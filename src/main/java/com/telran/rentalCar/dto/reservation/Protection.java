package com.telran.rentalCar.dto.reservation;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Protection {
    private float insurance_CDW;
    private float insurance_TP;
    private float insurance_SuperCDW;
    private float insurance_SuperTP;
    private float insurance_3PLC;
    private float insurance_SuperCDWMonth;
    private float insurance_SuperTPMonth;
}
