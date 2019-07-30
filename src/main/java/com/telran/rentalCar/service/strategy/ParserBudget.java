package com.telran.rentalCar.service.strategy;

import com.telran.rentalCar.service.Parser;
import org.springframework.beans.factory.annotation.Value;

public class ParserBudget implements Parser {
    @Value("${parser.url.budget}")
    String url;

    @Override
    public void parse() {
    //concretely parser
    }
}
