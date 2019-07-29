package com.telran.rentalCar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParserService {

    @Autowired(required = false)
    List<Parser> parserList;

    //parsing all sites periodically
    public void parse(){
        parserList.forEach(Parser::parse);
    }

    //parsing concretely site by request
    public void parse(Class<?> clazz){
        parserList.forEach(site ->{
            if (site.getClass().equals(clazz)) {
                site.parse();
            }
        });
    }
}
