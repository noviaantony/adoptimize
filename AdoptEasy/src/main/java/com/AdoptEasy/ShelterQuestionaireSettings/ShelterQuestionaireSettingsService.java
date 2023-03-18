package com.AdoptEasy.ShelterQuestionaireSettings;

import com.AdoptEasy.PreScreeningQuestionnaire.PreScreeningQuestionnaire;
import com.AdoptEasy.PreScreeningQuestionnaire.PreScreeningQuestionnaireService;
import com.AdoptEasy.User.Exception.UserNotFoundException;
import com.AdoptEasy.User.User;
import com.AdoptEasy.User.UserRepository;
import com.AdoptEasy.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShelterQuestionaireSettingsService {
    private final ShelterQuestionaireSettingsRepository shelterQuestionaireSettingsRepository;
    private final PreScreeningQuestionnaireService preScreeningQuestionnaireService;
    private final UserService userService;

    @Autowired
    public ShelterQuestionaireSettingsService(ShelterQuestionaireSettingsRepository shelterQuestionaireSettingsRepository,
                                              PreScreeningQuestionnaireService preScreeningQuestionnaireService, UserService userService) {
        this.shelterQuestionaireSettingsRepository = shelterQuestionaireSettingsRepository;
        this.preScreeningQuestionnaireService = preScreeningQuestionnaireService;
        this.userService = userService;
    }

    public void setDefaultSettings(Long userId){
        //find all default questions
        List<PreScreeningQuestionnaire> defaultQuestions = preScreeningQuestionnaireService.getDefaultQuestions();

        //find the user
//        User user = userService.getUserById(userId);

        //for each default question, create a new ShelterQuestionaireSettings object
        for(PreScreeningQuestionnaire question : defaultQuestions){
            ShelterQuestionaireSettings shelterQuestionaireSettings = new ShelterQuestionaireSettings(userId, question);
            shelterQuestionaireSettingsRepository.save(shelterQuestionaireSettings);
        }
    }

    public List<ShelterQuestionaireSettings>getAllUserSettings(Long userId) throws UserNotFoundException {
//        User user = userService.getUserById(userId);
        return shelterQuestionaireSettingsRepository.findAllByUserId(userId);
    }

    public void updateUserSettings(Long userId, ShelterQuestionaireSettings shelterQuestionaireSettings) {

    }
}
