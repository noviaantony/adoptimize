package com.AdoptEasy.PreScreeningQuestionnaire;

import com.AdoptEasy.ShelterQuestionaireSettings.ShelterQuestionaireSettings;
import com.AdoptEasy.User.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "adopteasy_preScreeningQuestionnaire")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PreScreeningQuestionnaire {
    @Id
    @SequenceGenerator(
            name = "question_sequence",
            sequenceName = "question_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "question_sequence"
    )
    private Long Id;

    private String question;

    @ElementCollection
    private List<String> mcq;

    private QuestionType questionType;

    private String answer;

    private int scaleMin, scaleMax, scaleAnswer;

    private boolean isDefault = true;

    @OneToMany(mappedBy = "question")
    private List<ShelterQuestionaireSettings> shelterQuestionaireSettings;

    //mcq
    public PreScreeningQuestionnaire(Long Id, QuestionType questionType, List<String> mcq, String answer){
        this.Id = Id;
        this.questionType = questionType;
        this.mcq = mcq;
        this.answer = answer;
    }

    //short answer
    public PreScreeningQuestionnaire(Long Id, QuestionType questionType, String question, String answer) {
        this.Id = Id;
        this.questionType = questionType;
        this.question = question;
        this.answer = answer;
    }

    //scale
    public PreScreeningQuestionnaire(Long Id, QuestionType questionType, String question, int scaleMin, int scaleMax, int scaleAnswer) {
        this.Id = Id;
        this.questionType = questionType;
        this.question = question;
        this.scaleMin = scaleMin;
        this.scaleMax = scaleMax;
        this.scaleAnswer = scaleAnswer;
    }
}
