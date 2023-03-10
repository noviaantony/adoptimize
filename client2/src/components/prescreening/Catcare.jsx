import React, { useState } from "react";
import "../../App.css";
import { Input } from "antd";
import cx from "classnames";


// Cat care questions
const catCareQuestions = [
  {
    question: "How much time are you willing to spend on cat care?",
    type: "scale",
    min: "Less than 1 hour",
    max: "More than 3 hours",
  },
  {
    question:
      "Are you willing to provide regular veterinary care for your cat?",
    type: "multipleChoice",
    choices: ["Yes", "No"],
  },
  {
    question: "Are you willing to provide regular grooming for your cat?",
    type: "multipleChoice",
    choices: ["Yes", "No"],
  },
];


const Catcare = () => {
  const [checkedList, setCheckedList] = useState(
    new Array(catCareQuestions.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedList = [...checkedList];
    updatedCheckedList[index] = !updatedCheckedList[index];
    setCheckedList(updatedCheckedList);
  };

  return (
    <>
      <div className="font-nunito">
        {catCareQuestions.map((question, index) => (
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

export default Catcare;
