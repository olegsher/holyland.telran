package com.telran.rentalCar.service.albarJson;

import java.io.IOException;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.stereotype.Service;
import java.nio.file.Files;
import java.nio.file.Paths;



@Service
public class AlbarJsonServiceImpl implements AlbarJsonService {

    public static JSONObject parseJSONFile(String filename) throws JSONException, IOException {
        String content = new String(Files.readAllBytes(Paths.get(filename)));
        return new JSONObject(content);
    }

    @Override
    public String getAllCars() {
        JSONObject combined = null;

        try {
            combined = new JSONObject();
            combined.put("Cars", parseJSONFile("cars.json"));
            combined.put("Location", parseJSONFile("location.json"));
            combined.put("Language", parseJSONFile("languages.json"));
            combined.put("Extras", parseJSONFile("extras.json"));

        } catch (JSONException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return combined.toString();
    }
}

