package com.AdoptEasy.Adoption;

import com.AdoptEasy.Adoption.*;
import com.AdoptEasy.Pet.Pet;
import com.AdoptEasy.Pet.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.function.Function;

@Service
public class AdoptionService {

    AdoptionRepository adoptionRepository;
    PetService petService;

    @Autowired
    public AdoptionService(AdoptionRepository adoptionRepository, PetService petService){
        this.adoptionRepository = adoptionRepository;
        this.petService = petService;
    }

    public List<Adoption> listAdoptions(){
        return adoptionRepository.findAll();
    }

    public Adoption saveAdoption(Adoption adoption){
        return adoptionRepository.save(adoption);
    }

    public Adoption getAdoption(Long id){
        return adoptionRepository.findById(id).get();
    }

    public void deleteAdoption(Long id){
        adoptionRepository.deleteById(id);
    }

    public Adoption updateAdoption(Long id, Adoption newAdoption){
        return adoptionRepository.findById(id).map(adoption ->{
            adoption.setCurrStatus(newAdoption.getCurrStatus());
            return adoptionRepository.save(adoption);
        }).orElse(null);
    }

    public void setStartDate(Long id) {
        if (!adoptionRepository.existsById(id)) {
            throw new AdoptionNotFoundException(id);
        }
        Adoption adoption = adoptionRepository.findById(id).get();
        adoption.setStartDate(LocalDate.now());
        adoptionRepository.save(adoption);
    }

    public void setEndDate(Long id) {
        if (!adoptionRepository.existsById(id)) {
            throw new AdoptionNotFoundException(id);
        }
        Adoption adoption = adoptionRepository.findById(id).get();
        adoption.setEndDate(LocalDate.now());
        adoptionRepository.save(adoption);
    }

    public List<Adoption> getAdoptionByPet(Pet pet) {


        return adoptionRepository.findAllByPet(pet);
    }

    public void startAdoptionApplication(Long id) {
        if (!adoptionRepository.existsById(id)) {
            throw new AdoptionNotFoundException(id);
        }
        Adoption adoption = adoptionRepository.findById(id).get();
        adoption.setCurrStatus("In Progress");
        adoption.setStartDate(LocalDate.now());
        adoptionRepository.save(adoption);

    }

    public PhaseOfAdoption approveAdoptionPhase(Long id) {
        if (!adoptionRepository.existsById(id)) {
            throw new AdoptionNotFoundException(id);
        }
        Adoption adoption = adoptionRepository.findById(id).get();
        Integer phase = adoption.getPhaseOfAdoption() + 1;
        PhaseOfAdoption phaseOfAdoption = PhaseOfAdoption.PRESCREENING;

        if (phase == 1){
            phaseOfAdoption = PhaseOfAdoption.HOMECHECK;
        } else if (phase == 2){
            phaseOfAdoption = PhaseOfAdoption.APPROVED;
        }else if  (phase == 3){
            phaseOfAdoption = PhaseOfAdoption.ADOPTIONCONTRACT;
        }else if  (phase == 4){
            phaseOfAdoption = PhaseOfAdoption.PAYMENT;
        }else if  (phase == 5){
            phaseOfAdoption = PhaseOfAdoption.COLLECTION;
        }
        adoption.setPhaseOfAdoption(phase);
        adoptionRepository.save(adoption);
        return phaseOfAdoption;
    }
}
