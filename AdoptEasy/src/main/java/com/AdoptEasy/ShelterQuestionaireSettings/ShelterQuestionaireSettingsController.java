package com.AdoptEasy.ShelterQuestionaireSettings;

import com.AdoptEasy.User.Exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/AdoptEasy/ShelterQuestionaireSettings")
@CrossOrigin(origins = "*")
public class ShelterQuestionaireSettingsController {
    private final ShelterQuestionaireSettingsService shelterQuestionaireSettingsService;

    public ShelterQuestionaireSettingsController(ShelterQuestionaireSettingsService shelterQuestionaireSettingsService) {
        this.shelterQuestionaireSettingsService = shelterQuestionaireSettingsService;
    }

    @PostMapping(path="/setDefaultSettings")
    public ResponseEntity<String> setDefaultQuestions(@RequestParam Long userId) throws UserNotFoundException {
        shelterQuestionaireSettingsService.setDefaultSettings(userId);
        return new ResponseEntity<>("Default settings set", HttpStatus.OK);
    }

    @GetMapping(path="/getAllUserSettings")
    public ResponseEntity<List<ShelterQuestionaireSettings>> getAllUserSettings(@RequestParam Long userId) throws UserNotFoundException {

        return new ResponseEntity<>(shelterQuestionaireSettingsService.getAllUserSettings(userId), HttpStatus.OK);
    }

    @PutMapping(path="/updateUserSettings")
    public ResponseEntity<String> updateUserSettings(@RequestParam Long userId, @RequestBody ShelterQuestionaireSettings shelterQuestionaireSettings) throws UserNotFoundException {
        shelterQuestionaireSettingsService.updateUserSettings(userId, shelterQuestionaireSettings);
        return new ResponseEntity<>("User settings updated", HttpStatus.OK);
    }

}
