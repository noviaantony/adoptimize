package com.AdoptEasy.ShelterQuestionaireSettings;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShelterQuestionaireSettingsRepository extends JpaRepository<ShelterQuestionaireSettings, Long> {
}
