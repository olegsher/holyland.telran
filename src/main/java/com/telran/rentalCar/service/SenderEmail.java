package com.telran.rentalCar.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.telran.rentalCar.dto.reservation.RentData;
import com.telran.rentalCar.dto.reservation.ReservData;
import jdk.nashorn.internal.parser.JSONParser;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SenderEmail implements Sender {
    private static final String RESERVATION_DATA = "Reservation data";
    @Autowired
    private JavaMailSender javaMailSender;

    ObjectMapper mapper = new ObjectMapper();

    @SneakyThrows
    @Override
    public boolean send(ReservData reservData) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setTo(reservData.getContact().getEmail());
        mailMessage.setSubject(RESERVATION_DATA);
        mailMessage.setText(mapper.writeValueAsString(reservData));
        try{
            javaMailSender.send(mailMessage);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
