package com.AdoptEasy.PreScreeningQuestionnaire;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreScreeningQuestionnaireRepository extends JpaRepository<PreScreeningQuestionnaire, Long> {
    List<PreScreeningQuestionnaire> findAllByDefaultSettingTrue();
//    PreScreeningQuestionnaire findByQuestionId(Long questionId);
//
//    PreScreeningQuestionnaire findByQuestionType(QuestionType questionType);
}
