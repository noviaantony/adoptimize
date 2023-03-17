package com.AdoptEasy.ShelterQuestionaireSettings;


import com.AdoptEasy.PreScreeningQuestionnaire.PreScreeningQuestionnaire;
import com.AdoptEasy.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShelterQuestionaireSettings {
    @Id
    @SequenceGenerator(
            name = "shelter_questionaire_settings_sequence",
            sequenceName = "shelter_questionaire_settings_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "shelter_questionaire_settings_sequence"
    )
    private Long settingsId;

//    @ManyToOne
//    @MapsId("userId")
//    @JoinColumn(name = "user_id")
//    private User user;
    private Long userId;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "question_id")
    @JsonManagedReference
    private PreScreeningQuestionnaire question;

    private Boolean isSelected;

    public ShelterQuestionaireSettings(Long userId, PreScreeningQuestionnaire question) {
        this.userId = userId;
        this.question = question;
        this.isSelected = false;
    }
}
