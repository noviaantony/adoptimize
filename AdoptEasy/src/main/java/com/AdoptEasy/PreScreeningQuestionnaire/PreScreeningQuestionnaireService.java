package com.AdoptEasy.PreScreeningQuestionnaire;

import com.AdoptEasy.Adoption.Adoption;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PreScreeningQuestionnaireService {
    private final PreScreeningQuestionnaireRepository preScreeningQuestionnaireRepository;

    public PreScreeningQuestionnaireService(PreScreeningQuestionnaireRepository preScreeningQuestionnaireRepository) {
        this.preScreeningQuestionnaireRepository = preScreeningQuestionnaireRepository;
    }

    public PreScreeningQuestionnaire saveMCQQuestion(PreScreeningQuestionnaire mcqQuestion) {
        return preScreeningQuestionnaireRepository.save(mcqQuestion);
    }

    public PreScreeningQuestionnaire saveShortQuestion(PreScreeningQuestionnaire shortQuestion) {
        return preScreeningQuestionnaireRepository.save(shortQuestion);
    }

    public PreScreeningQuestionnaire saveScaleQuestion(PreScreeningQuestionnaire scaleQuestion) {
        return preScreeningQuestionnaireRepository.save(scaleQuestion);
    }

    public PreScreeningQuestionnaire getQuestionById(Long id) {
        return preScreeningQuestionnaireRepository.findById(id).get();
    }

    public void deleteQuestion(Long id){
        preScreeningQuestionnaireRepository.deleteById(id);
    }
}
