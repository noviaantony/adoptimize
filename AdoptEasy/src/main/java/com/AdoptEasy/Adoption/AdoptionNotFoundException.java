package com.AdoptEasy.Adoption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND) // 404 Error
public class AdoptionNotFoundException extends RuntimeException{
    public AdoptionNotFoundException(Long id){
        super("could not find adoption "+id);
    }
}
