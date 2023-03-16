package com.AdoptEasy.Adoption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.AdoptEasy.Adoption.*;
import com.AdoptEasy.User.*;
import com.AdoptEasy.User.Exception.UserNotFoundException;
import com.AdoptEasy.Pet.*;


import java.util.List;

@RestController
@RequestMapping(path ="api/v1/AdoptEasy/adoption")
public class AdoptionController{
    @Autowired
    AdoptionService adoptionService;

    AdoptionRepository adoptionRepository;
    PetRepository petRepository;

    public AdoptionController(AdoptionRepository adoptionRepository, AdoptionService adoptionService) {
        this.adoptionRepository = adoptionRepository;
        this.adoptionService = adoptionService;
    }

    // returns list of all adoptions
    @GetMapping("/getAllAdoptions")
    public List<Adoption> getAdoptions(){
        return adoptionService.listAdoptions();
    }

    // return adoption by id
    @GetMapping("getAdoption/{id}")
    public Adoption getAdoption(@PathVariable Long id){
        if(!adoptionRepository.existsById(id)){
            throw new AdoptionNotFoundException(id);
        }
        return adoptionService.getAdoption(id);
    }

    // updates adoption status by petId and id of the adoption
    @PutMapping("/updateAdoption/{pet_id}/{id}")
    public ResponseEntity<?> updateAdoption(@PathVariable(value = "pet_id") Long petId, @PathVariable Long id,
            @Validated @RequestBody Adoption adoption) {

        if (!petRepository.existsById(petId)) {
            throw new PetNotFoundException(petId);
        }

        if(!adoptionRepository.existsById(id)) {
            throw new AdoptionNotFoundException(id);
        }
        Pet pet = petRepository.findById(petId).get();
        return adoptionRepository.findByIdAndPet(id, pet).map(oldAdoption -> {
            oldAdoption.setCurrStatus(adoption.getCurrStatus());
            adoptionService.saveAdoption(oldAdoption);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new AdoptionNotFoundException(id));

    }

    @DeleteMapping("deleteAdoption/{id}")
    public void deleteAdoption(@PathVariable Long id){
        if(!adoptionRepository.existsById(id)){
            throw new AdoptionNotFoundException(id);
        }
        adoptionRepository.deleteById(id);
    }

    @PutMapping("setStartDate/{id}")
    public void setStartDate(@PathVariable Long id) {
        adoptionService.setStartDate(id);
    }

    @PutMapping("setEndDate/{id}")
    public void setEndDate(@PathVariable Long id) {
        adoptionService.setEndDate(id);
    }
}