package com.AdoptEasy.PreScreeningQuestionnaire;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PreScreeningQuestionnaireRepository extends JpaRepository<PreScreeningQuestionnaire, Long> {
    PreScreeningQuestionnaire findByQuestionId(Long questionId);

    PreScreeningQuestionnaire findByQuestionType(QuestionType questionType);
}
