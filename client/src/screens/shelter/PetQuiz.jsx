import React from 'react'
import Header from '../../components/common/misc/Header'
import Quiz from '../../components/common/petquiz/Quiz'
import { QuizProvider } from "../../components/common/petquiz/QuizContext";

const PetQuiz = () => {


  return (
    <div className="font-nunito">
      <Header Title = "Cat Care Quiz" Description="test how well you know how to care for a cat here!"/>
      <QuizProvider>
        <Quiz />
      </QuizProvider>


    </div>
  )
}

export default PetQuiz
