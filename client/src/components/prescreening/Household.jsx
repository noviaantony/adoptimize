import React, {useEffect, useState} from "react";
import "../../App.css"
import { Input } from "antd";
import cx from "classnames";
import adoptionService from "../../services/AdoptionService";
import preScreeningQuestionService from "../../services/PreScreeningQuestionService";

const Household = () => {
  const [personalQuestions, setPersonalQuestions] = useState([])
  useEffect(() => {
    preScreeningQuestionService.getPreScreeningQuestionnaire().then((res) => {
      console.log("retrieving personal questions");
      setPersonalQuestions(res.data);
    });
  }, []);


  const [checkedList, setCheckedList] = useState(
      new Array(personalQuestions.length).fill(false)
  );

  useEffect(() => {
    console.log("personal questions: ", personalQuestions)
    // console.log("filtered questions: ", filteredQuestions);
  }, [personalQuestions]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedList = [...checkedList];
    updatedCheckedList[index] = !updatedCheckedList[index];
    setCheckedList(updatedCheckedList);
  };


  return (
      <>
        <div className="font-nunito">
          {personalQuestions.filter((val)=>val.questionCategory === "HOUSEHOLD").map((question, index) => (
              <div
                  key={index}
                  className={cx("rounded-lg shadow-md p-6 mb-4", {
                    "bg-[#fdede1]": checkedList[index],
                    "bg-white": !checkedList[index],
                  })}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold mb-4">
                    <label htmlFor={`question-${index}`} className="mr-2">
                      {question.question}
                    </label>
                  </h2>
                  {/*<input*/}
                  {/*    type="checkbox"*/}
                  {/*    checked={checkedList[index]}*/}
                  {/*    onChange={() => handleCheckboxChange(index)}*/}
                  {/*/>*/}
                </div>

                {question.questionType === "MCQ" && (
                    <div className=" items-center">
                      {(() => {
                        const elements = [];
                        for (let i = 0; i < question.mcq.length; i++) {
                          const option = question.mcq[i];
                          elements.push(
                              <div key={i} className="flex items-center">
                                <input
                                    type="radio"
                                    id={`question-${index}-option-${i}`}
                                    name={`question-${index}`}
                                    value={option}
                                    className=" mr-2"
                                />
                                <label htmlFor={`question-${index}-option-${i}`} className=" text-sm font-medium text-gray-600">
                                  {option}
                                </label>
                              </div>
                          );
                        }
                        return elements;
                      })()}

                    </div>
                )}

                {question.questionType === "SHORT_ANSWER" && (
                    <div className="flex justify-between items-center mt-2">
                      {/* <input type="text" id={`question-${index}`} className="w-full" /> */}
                      <Input placeholder="Type your response..." />
                    </div>
                )}

                {question.questionType === "SCALE" && (
                    <div>
                      <div class="flex justify-between items-center">
                        <div class="text-sm font-medium text-gray-600">
                          {question.scaleMin}
                        </div>
                        <div class="text-sm font-medium text-gray-600">
                          {question.scaleMax}
                        </div>
                      </div>
                      <div class="flex justify-between items-center mt-2">
                        <input type="range" min={question.scaleMin} max={question.scaleMax} className="w-full mr-2"/>
                      </div>
                    </div>
                )}
              </div>
          ))}
        </div>
      </>
  );
};

export default Household;
