package com.AdoptEasy.AdoptionContract;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdoptionContractRepository extends JpaRepository<AdoptionContract, Long> {
    Optional<AdoptionContract> findByName(String name);
}
