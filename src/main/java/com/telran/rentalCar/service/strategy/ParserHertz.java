package com.telran.rentalCar.service.strategy;

import com.telran.rentalCar.service.Parser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ParserHertz implements Parser {
    @Value("${parser.url.hertz}")
    String url;

    @Override
    public void parse() {
    //concretely parser
    }
}
