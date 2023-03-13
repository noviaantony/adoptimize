package com.AdoptEasy.Adoption;

import com.AdoptEasy.Adoption.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.function.Function;

@Service
public class AdoptionService {
    @Autowired
    AdoptionRepository adoptionRepository;

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
}
