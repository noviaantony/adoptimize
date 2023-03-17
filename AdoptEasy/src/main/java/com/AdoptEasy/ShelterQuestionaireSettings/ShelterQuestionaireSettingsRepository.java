package com.AdoptEasy.ShelterQuestionaireSettings;

import com.AdoptEasy.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShelterQuestionaireSettingsRepository extends JpaRepository<ShelterQuestionaireSettings, Long> {

    List<ShelterQuestionaireSettings> findAllByUserId(Long userId);
}
