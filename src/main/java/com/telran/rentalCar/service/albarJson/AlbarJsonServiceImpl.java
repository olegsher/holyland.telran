package com.telran.rentalCar.service.albarJson;


import java.io.IOException;
import org.springframework.stereotype.Service;
import java.nio.file.Files;
import java.nio.file.Paths;


@Service
public class AlbarJsonServiceImpl implements AlbarJsonService {

    @Override
    public String getAllCars() {

        String cars = "cars.json";
        String carsJson = null;
        String location = "location.json";
        String locationJson = null;
        String extras = "extras.json";
        String extrasJson = null;
        String languages = "languages.json";
        String languagesJson = null;
        try {
            carsJson = Files.lines(Paths.get(cars)).reduce("", String::concat);
            locationJson = Files.lines(Paths.get(location)).reduce("", String::concat);
            extrasJson = Files.lines(Paths.get(extras)).reduce("", String::concat);
            languagesJson = Files.lines(Paths.get(languages)).reduce("", String::concat);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return carsJson + "\n" + locationJson +  "\n" + extrasJson + "\n" + languagesJson;
    }
}
