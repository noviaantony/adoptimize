import React, {useState} from 'react'
import { IoAdd } from "react-icons/io5";

const questions = [
  {
    id: "01",
    Question: "What is your name?",
    ExpectedAns: "NONE",
  },
  {
    id: "02",
    Question: "What is your age?",
    ExpectedAns: "NONE",
  },
  {
    id: "03",
    Question:
      "Are you willing to mesh your windows & doors, and have them checked by our staff?",
    ExpectedAns: "Yes",
  },
  {
    id: "04",
    Question:
      "What kind of house do u stay in currently? (HDB, Condo, Landed, etc.)",
    ExpectedAns: "NONE",
  },
];




const Form2 = () => {

  const [formContent, setFormContent] = useState([
    {
      id: 0,
      name: "0",
      label: "Untitled Question",
      required: false,
      question_type: "short_answer",
      list: [],
    },
  ]);
  const [onEdit, setOnEdit] = useState(false);
  const [textField, setTextField] = useState("");
  const [editedField, setEditedField] = useState("");

  const addQuestion = () => {
    const field = {
      name: `question_${formContent.length}`,
      label: "Untitled question",
      required: false,
      question_type: "short_answer", // "paragraph", "multichoice",
      list: [],
    };
    setFormContent([...formContent, field]);
  };

  const editField = (fieldName, fieldLabel) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      formFields[fieldIndex].label = fieldLabel;
      setFormContent(formFields);
    }
  };

  const editFieldType = (fieldName, fieldLabel) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      formFields[fieldIndex].question_type = fieldLabel;
      setFormContent(formFields);
    }
  };

  const addFieldOption = (fieldName, option) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      if (option && option != "") {
        formFields[fieldIndex].list.push(option);
        setFormContent(formFields);
        setTextField("");
      }
    }
  };


  return (
    <div>
      <div class="mb-12 mx-32 font-nunito">
        {questions.map((qn) => (
          <>
            <label
              for="large-input"
              class="block mb-2 mt-5 text-xl text-gray-900 dark:text-white font-bold"
            >
              {qn.Question}:
            </label>
            <input
              type="text"
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito"
              placeholder="Enter Expected Response"
              // onChange={(e) => onChangeInput(e, qnId)}
              value={qn.ExpectedAns}
            />
          </>
        ))}
      </div>
      <div className="flex flex-col justify-between items-center px-4 h-screen w-full mt-20 font-nunito">
        <div className="relative flex flex-col w-full space-y-4">
          {formContent.map((field) => {
            return (
              <div
                key={field.id}
                className="rounded-md bg-white flex w-full shadow-md px-4"
              >
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-center space-y-2">
                    <div
                      key={field.name}
                      className="block text-sm font-medium text-gray-700 capitalize"
                    >
                      {onEdit && editedField === field.name ? (
                        <input
                          type="text"
                          value={field.label}
                          onChange={(e) =>
                            editField(field.name, e.target.value)
                          }
                          onBlur={() => {
                            setOnEdit(false);
                            setEditedField("");
                          }}
                        />
                      ) : (
                        <label
                          onClick={() => {
                            setOnEdit(true);
                            setEditedField(field.name);
                          }}
                        >
                          {field.label}
                        </label>
                      )}
                    </div>
                    <div>
                      <select
                        onChange={(e) =>
                          editFieldType(field.name, e.target.value)
                        }
                      >
                        <option value="short_answer">Short Answer</option>
                        <option value="paragraph">Paragraph</option>
                        <option value="multichoice">Multichoice</option>
                      </select>
                    </div>
                  </div>

                  <div className="my-4 w-full">
                    {field.question_type == "short_answer" && (
                      <input
                        type="text"
                        className="px-5 shadow-sm h-10 rounded-md block w-full"
                        placeholder={field.label}
                      />
                    )}
                    {field.question_type == "paragraph" && (
                      <textarea
                        rows={4}
                        className="px-5 shadow-sm h-10 rounded-md block w-full"
                        placeholder={field.label}
                      />
                    )}
                    {field.question_type == "multichoice" && (
                      <div className="my-4 flex flex-col space-y-2">
                        <select className="px-5 shadow-sm h-10 rounded-md block w-full">
                          {field.list.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <div className="flex space-between">
                          <input
                            type="text"
                            onChange={(e) => setTextField(e.target.value)}
                            value={textField}
                            placeholder="Add an option"
                            className="flex-1"
                          />
                          <button
                            className="bg-indigo-700 block hover:bg-indigo-900 text-white px-4"
                            onClick={() =>
                              addFieldOption(field.name, textField)
                            }
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <button
            className="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-xl px-10 py-2"
            type="button"
          >
            Save Questions
          </button>
          <button
            className="text-gray-700 hover:bg-gray-700 hover:text-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-xl px-10 py-2"
            onClick={() => addQuestion()}
            type="button"
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form2