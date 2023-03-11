package com.AdoptEasy.Pet;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND) // 404 Error
public class PetNotFoundException extends RuntimeException{
    
    public PetNotFoundException(Long id){
        super("Could not find pet "+id);
    }
}
