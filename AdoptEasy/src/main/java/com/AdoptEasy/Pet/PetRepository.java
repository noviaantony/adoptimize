package com.AdoptEasy.Pet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.AdoptEasy.Pet.Pet;

import java.util.List;
import java.util.Optional;

@Repository
public interface PetRepository extends JpaRepository<Pet,Long>{
    Pet findById(long id);
    Optional<Pet> findByName(String name);
    Optional<Pet> findByIdAndUserId(Long id, Long userId);
}
