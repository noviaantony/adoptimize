import React, { useState } from "react";
import "../../App.css"
import { Input } from "antd";
import cx from "classnames";


// Personal questions
const personalQuestions = [
  {
    question: 'Name',
    type: 'shortAns'
  },
  {
    question: 'Age',
    type: 'shortAns'
  },
  {
    question: 'Email Address',
    type: 'shortAns'
  },
  {
    question: 'Contact Number',
    type: 'shortAns'
  },
  {
    question: 'Preffered Contact Days',
    type: 'multipleChoice',
    choices: ['Monday', 'Tuesday']
  },
  {
    question: 'Have you ever owned a cat before?',
    type: 'multipleChoice',
    choices: ['Yes', 'No']
  },
  {
    question: 'Why do you want to adopt a cat?',
    type: 'shortAns'
  },
  {
    question: 'What qualities are you looking for in a cat?',
    type: 'shortAns'
  }
];


const Personal = () => {
  const [checkedList, setCheckedList] = useState(
    new Array(personalQuestions.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedList = [...checkedList];
    updatedCheckedList[index] = !updatedCheckedList[index];
    setCheckedList(updatedCheckedList);
  };

  return (
    <>
      <div className="font-nunito">
        {personalQuestions.map((question, index) => (
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
              <input
                type="checkbox"
                checked={checkedList[index]}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>

            {question.type === "multipleChoice" && (
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium text-gray-600">
                  {question.choices[0]}
                </div>
                <input
                  type="radio"
                  id={`question-${index}-yes`}
                  name={`question-${index}`}
                  value="yes"
                  className="mr-2"
                />
                <div className="text-sm font-medium text-gray-600">
                  {question.choices[1]}
                </div>
                <input
                  type="radio"
                  id={`question-${index}-no`}
                  name={`question-${index}`}
                  value="no"
                  className="mr-2"
                />
                
              </div>
            )}

            {question.type === "shortAns" && (
              <div className="flex justify-between items-center mt-2">
                {/* <input type="text" id={`question-${index}`} className="w-full" /> */}
                <Input placeholder="Type your response..." />
              </div>
            )}

            {question.type === "scale" && (
              <div>
                <div class="flex justify-between items-center">
                  <div class="text-sm font-medium text-gray-600">
                    {question.min}
                  </div>
                  <div class="text-sm font-medium text-gray-600">
                    {question.max}
                  </div>
                </div>
                <div class="flex justify-between items-center mt-2">
                  <input type="range" min="1" max="5" class="w-full mr-2" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Personal;
