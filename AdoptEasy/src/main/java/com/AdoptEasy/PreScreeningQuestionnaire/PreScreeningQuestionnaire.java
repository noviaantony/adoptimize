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

    private List<String> mcqAnswer;

    private int scaleMin, scaleMax, scaleAnswer;

    private boolean isDefault = true;

    @OneToMany(mappedBy = "question")
    private List<ShelterQuestionaireSettings> shelterQuestionaireSettings;

    //mcq
    public PreScreeningQuestionnaire(QuestionType questionType, String question, List<String> mcq, List<String> mcqAnswer) {
        this.questionType = questionType;
        this.question = question;
        this.mcq = mcq;
        this.mcqAnswer = mcqAnswer;
    }

    // MCQ w/o answers
    public PreScreeningQuestionnaire(QuestionType questionType, String question, List<String> mcq) {
        this.questionType = questionType;
        this.question = question;
        this.mcq = mcq;
    }

    //short answer
    public PreScreeningQuestionnaire(QuestionType questionType, String question, String answer) {
        this.questionType = questionType;
        this.question = question;
        this.answer = answer;
    }

    // Short answer w/o answer
    public PreScreeningQuestionnaire(QuestionType questionType, String question) {
        this.questionType = questionType;
        this.question = question;
    }

    //scale
    public PreScreeningQuestionnaire(QuestionType questionType, String question, int scaleMin, int scaleMax, int scaleAnswer) {
        this.questionType = questionType;
        this.question = question;
        this.scaleMin = scaleMin;
        this.scaleMax = scaleMax;
        this.scaleAnswer = scaleAnswer;
    }

    // Scale w/o answer
    public PreScreeningQuestionnaire(QuestionType questionType, String question, int scaleMin, int scaleMax) {
        this.questionType = questionType;
        this.question = question;
        this.scaleMin = scaleMin;
        this.scaleMax = scaleMax;
    }
}
