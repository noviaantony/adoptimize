package com.AdoptEasy.ShelterQuestionaireSettings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShelterQuestionaireSettingsService {
    private final ShelterQuestionaireSettingsRepository shelterQuestionaireSettingsRepository;

    @Autowired
    public ShelterQuestionaireSettingsService(ShelterQuestionaireSettingsRepository shelterQuestionaireSettingsRepository) {
        this.shelterQuestionaireSettingsRepository = shelterQuestionaireSettingsRepository;
    }
}
