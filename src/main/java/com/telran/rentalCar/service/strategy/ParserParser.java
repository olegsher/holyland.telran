package com.telran.rentalCar.service.strategy;

import com.telran.rentalCar.service.Parser;
import org.springframework.beans.factory.annotation.Value;

public class ParserParser implements Parser {
//    this is a parser for Albar
    @Value("${parser.url.budget}")
    String url;

    @Override
    public void parse() {
    //concretely parser
    }
}
