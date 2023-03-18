package com.AdoptEasy.Pet;

import com.AdoptEasy.Pet.Pet;
import com.AdoptEasy.Pet.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class PetService {

    private final PetRepository petRepository;

    @Autowired
    public PetService(PetRepository petRepository){
        this.petRepository = petRepository;
    }

    public List<Pet> listPets(){
        return petRepository.findAll();
    }

    public Pet addPet(PetRequest pet){
        Pet newPet = new Pet(pet.name(), pet.breed(), pet.age(), LocalDate.parse(pet.dateJoined()),
                LocalDate.parse(pet.birthday()), pet.medical(), pet.status(),
                pet.imageAddress(), pet.description(), pet.weight(), pet.adoptionFee());
        return petRepository.save(newPet);
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
            pet.setDateJoined(newPet.getDateJoined());
            pet.setBirthday(newPet.getBirthday());
            pet.setMedical(newPet.getMedical());
            pet.setStatus(newPet.getStatus());
            return petRepository.save(pet);
        }).orElse(null);
    }
}
