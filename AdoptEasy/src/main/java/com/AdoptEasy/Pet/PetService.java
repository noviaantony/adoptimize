package com.AdoptEasy.Pet;

import com.AdoptEasy.Pet.Pet;
import com.AdoptEasy.Pet.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class PetService {
    @Autowired
    private PetRepository petRepository;

    public List<Pet> listPets(){
        return petRepository.findAll();
    }

    public Pet savePet(Pet pet){
        return petRepository.save(pet);
    }

    public Pet getPet(Long id){
        return petRepository.findById(id).get();
    }

    public void deletePet(Long id){
        petRepository.deleteById(id);
    }

    public Pet updatePet(Long id, Pet newPet){
        return petRepository.findById(id).map(pet ->{
            pet.setName(newPet.getName());
            pet.setBreed(newPet.getBreed());
            pet.setAge(newPet.getAge());
            pet.setDesc(newPet.getDesc());
            pet.setMedical(newPet.getMedical());
            pet.setReq(newPet.getReq());
            return petRepository.save(pet);
        }).orElse(null);
    }
}
