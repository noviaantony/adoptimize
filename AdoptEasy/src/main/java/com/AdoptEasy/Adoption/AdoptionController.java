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
@CrossOrigin(origins = "*")
public class AdoptionController{
    @Autowired
    AdoptionService adoptionService;

    AdoptionRepository adoptionRepository;
    PetRepository petRepository;

    public AdoptionController(AdoptionRepository adoptionRepository, AdoptionService adoptionService, PetRepository petRepository){
        this.adoptionRepository = adoptionRepository;
        this.adoptionService = adoptionService;
        this.petRepository = petRepository;
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

    // return adoption by petId
    @GetMapping("getAdoptionByPet/{pet_id}")
    public ResponseEntity<List<Adoption>> getAdoptionByPet(@PathVariable Long pet_id){
//        if(!petRepository.existsById(pet_id)){
//            throw new PetNotFoundException(pet_id);
//        }
        Pet pet = petRepository.findPetByPetId(pet_id);
        return ResponseEntity.ok(adoptionService.getAdoptionByPet(pet));
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