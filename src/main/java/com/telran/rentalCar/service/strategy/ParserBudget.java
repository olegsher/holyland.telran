package com.telran.rentalCar.service.strategy;

import com.telran.rentalCar.service.Parser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ParserBudget implements Parser {
    @Value("${parser.url.albar}")
    String url;

    @Override
    public void parse() {
    //concretely parser
    }
}
