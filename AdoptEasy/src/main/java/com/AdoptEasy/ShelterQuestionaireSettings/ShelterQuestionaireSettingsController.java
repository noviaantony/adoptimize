package com.AdoptEasy.ShelterQuestionaireSettings;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/v1/AdoptEasy/ShelterQuestionaireSettings")
public class ShelterQuestionaireSettingsController {
    private final ShelterQuestionaireSettingsService shelterQuestionaireSettingsService;

    public ShelterQuestionaireSettingsController(ShelterQuestionaireSettingsService shelterQuestionaireSettingsService) {
        this.shelterQuestionaireSettingsService = shelterQuestionaireSettingsService;
    }




}
