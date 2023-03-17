package com.AdoptEasy.PreScreeningQuestionnaire;

import com.AdoptEasy.ShelterQuestionaireSettings.ShelterQuestionaireSettings;
import com.AdoptEasy.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
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

    private QuestionCategory questionCategory;

    private String answer;

    @ElementCollection
    private List<String> mcqAnswer;

    private int scaleMin, scaleMax, scaleAnswer;

    private boolean defaultSetting = true;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<ShelterQuestionaireSettings> shelterQuestionaireSettings;

    //mcq
    public PreScreeningQuestionnaire(QuestionType questionType, String question, List<String> mcq, List<String> mcqAnswer, QuestionCategory questionCategory) {
        this.questionType = questionType;
        this.question = question;
        this.mcq = mcq;
        this.mcqAnswer = mcqAnswer;
        this.questionCategory = questionCategory;
    }

    // MCQ w/o answers
    public PreScreeningQuestionnaire(QuestionType questionType, String question, List<String> mcq, QuestionCategory questionCategory) {
        this.questionType = questionType;
        this.question = question;
        this.mcq = mcq;
        this.questionCategory = questionCategory;
    }

    //short answer
    public PreScreeningQuestionnaire(QuestionType questionType, String question, String answer, QuestionCategory questionCategory) {
        this.questionType = questionType;
        this.question = question;
        this.answer = answer;
        this.questionCategory = questionCategory;
    }

    // Short answer w/o answer
    public PreScreeningQuestionnaire(QuestionType questionType, String question, QuestionCategory questionCategory) {
        this.questionType = questionType;
        this.question = question;
        this.questionCategory = questionCategory;
    }

    //scale
    public PreScreeningQuestionnaire(QuestionType questionType, String question, int scaleMin, int scaleMax, int scaleAnswer, QuestionCategory questionCategory) {
        this.questionType = questionType;
        this.question = question;
        this.scaleMin = scaleMin;
        this.scaleMax = scaleMax;
        this.scaleAnswer = scaleAnswer;
        this.questionCategory = questionCategory;
    }

    // Scale w/o answer
    public PreScreeningQuestionnaire(QuestionType questionType, String question, int scaleMin, int scaleMax,QuestionCategory questionCategory) {
        this.questionType = questionType;
        this.question = question;
        this.scaleMin = scaleMin;
        this.scaleMax = scaleMax;
        this.questionCategory = questionCategory;
    }
}
