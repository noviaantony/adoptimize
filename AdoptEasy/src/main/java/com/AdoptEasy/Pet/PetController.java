package com.AdoptEasy.Pet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.AdoptEasy.Pet.PetService;
import com.AdoptEasy.Pet.PetRepository;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/AdoptEasy/pet")
@CrossOrigin(origins = "*")
public class PetController {
    @Autowired
    private final PetService petService;

    private final PetRepository petRepository;

    @Autowired
    public PetController(PetRepository petRepository, PetService petService){
        this.petRepository = petRepository;
        this.petService = petService;
    }

    // returns list of all pets
    @GetMapping("/getAllPets")
    public List<Pet> getPets(){
        return petService.listPets();
    }

    @GetMapping("/{id}")
    public Pet getPet(@PathVariable Long id){
        if(!petRepository.existsById(id)){
            throw new PetNotFoundException(id);
        }
        return petService.getPet(id);
    }

    @PostMapping("/addPet")
    public ResponseEntity<Pet> addPet(@RequestBody PetRequest petRequest){
        return new ResponseEntity<>(petService.addPet(petRequest), HttpStatus.CREATED);
    }

    @DeleteMapping("/deletePet/{id}")
    public void delete(@PathVariable Long id){
        if(!petRepository.existsById(id)){
            throw new PetNotFoundException(id);
        }
        petRepository.deleteById(id);
    }

}
