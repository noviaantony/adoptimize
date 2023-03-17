package com.AdoptEasy.ShelterQuestionaireSettings;


import com.AdoptEasy.PreScreeningQuestionnaire.PreScreeningQuestionnaire;
import com.AdoptEasy.User.User;
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
    private Long settingsId;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("questionId")
    @JoinColumn(name = "question_id")
    private PreScreeningQuestionnaire question;

}
