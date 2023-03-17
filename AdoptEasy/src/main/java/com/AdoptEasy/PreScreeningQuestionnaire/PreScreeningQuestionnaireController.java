package com.AdoptEasy.PreScreeningQuestionnaire;

import com.AdoptEasy.Adoption.Adoption;
import com.AdoptEasy.Adoption.AdoptionNotFoundException;
import com.AdoptEasy.Adoption.AdoptionRepository;
import com.AdoptEasy.Adoption.AdoptionService;
import com.AdoptEasy.Pet.Pet;
import com.AdoptEasy.Pet.PetRepository;
import com.AdoptEasy.User.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/AdoptEasy/PreScreeningQuestionnaire")
@CrossOrigin(origins = "*")
public class PreScreeningQuestionnaireController {
    private final PreScreeningQuestionnaireService preScreeningQuestionnaireService;

    private final PreScreeningQuestionnaireRepository preScreeningQuestionnaireRepository;


    public PreScreeningQuestionnaireController(PreScreeningQuestionnaireRepository preScreeningQuestionnaireRepository, PreScreeningQuestionnaireService preScreeningQuestionnaireService) {
        this.preScreeningQuestionnaireRepository = preScreeningQuestionnaireRepository;
        this.preScreeningQuestionnaireService = preScreeningQuestionnaireService;
    }

    @GetMapping(path="/{id}")
    public PreScreeningQuestionnaire getQuestion(@PathVariable Long id){
        if(!preScreeningQuestionnaireRepository.existsById(id)){
            throw new AdoptionNotFoundException(id);
        }
        return preScreeningQuestionnaireService.getQuestionById(id);
    }

    @GetMapping(path="/getAllQuestions")
    public List<PreScreeningQuestionnaire> getAllQuestions(){
        return preScreeningQuestionnaireService.getAllQuestions();
    }

    @PostMapping("/addMCQQuestion")
    public PreScreeningQuestionnaire saveMCQQuestion(PreScreeningQuestionnaire mcqQuestion) {
        return preScreeningQuestionnaireService.saveMCQQuestion(mcqQuestion);
    }

    @PostMapping("/addshortQuestion")
    public PreScreeningQuestionnaire saveShortQuestion(PreScreeningQuestionnaire shortQuestion) {
        return preScreeningQuestionnaireService.saveShortQuestion(shortQuestion);
    }

    @PostMapping("/addScaleQuestion")
    public PreScreeningQuestionnaire saveScaleQuestion(PreScreeningQuestionnaire scaleQuestion) {
        return preScreeningQuestionnaireService.saveScaleQuestion(scaleQuestion);
    }

    @DeleteMapping("deletePreScreeningQuestionnaire/{id}")
    public void deleteQuestion(@PathVariable Long id){
        if(!preScreeningQuestionnaireRepository.existsById(id)){
            throw new AdoptionNotFoundException(id);
        }
        preScreeningQuestionnaireRepository.deleteById(id);
    }

}
