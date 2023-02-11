import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5";

import { Link } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";

const Form = () => {
  // confirmation modal functions & useStates
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const hotjarScript = `
        (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3361643,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [formContent, setFormContent] = useState([
    {
      id: 0,
      name: "0",
      label: "Enter Question",
      expected: "Enter Expected Response",
      required: false,
      question_type: "short_answer",
      list: [],
    },
  ]);

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

  const [onEdit, setOnEdit] = useState(false);
  const [textField, setTextField] = useState("");
  const [editedField, setEditedField] = useState("");

  const addQuestion = () => {
    const field = {
      name: `question_${formContent.length}`,
      label: "Enter Question",
      expected: "Enter Expected Response",
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
    <>
      <div
          style={{display: 'none'}}
          dangerouslySetInnerHTML={{__html: hotjarScript}}
      />
      <div className="flex flex-col justify-between items-center px-4 h-screen w-full mt-20 font-nunito">
        <div className="relative flex flex-col w-full space-y-4">
          {questions.map((question) => {
            <label
              for="large-input"
              class="block mb-2 mt-5 text-xl text-gray-900 dark:text-white font-bold"
            >
              {question.Question}:
            </label>;
          })}

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
                          className="px-5 shadow-sm h-10 rounded-md block w-full"
                        />
                      ) 
                      : (
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
                    <div class="flex justify-end gap-4">
                      <a x-data="{ tooltip: 'Delete' }" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                          x-tooltip="tooltip"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                          x-tooltip="tooltip"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* <div>
                                        <select onChange={(e) => editFieldType(field.name, e.target.value)}>
                                            <option value="short_answer">Short Answer</option>
                                            <option value="paragraph">Paragraph</option>
                                            <option value="multichoice">Multichoice</option>
                                        </select>
                                    </div> */}
                  </div>

                  <div className="my-4 w-full">
                    {
                      <input
                        type="text"
                        className="px-5 shadow-sm h-10 rounded-md block w-full"
                        placeholder={field.expected}
                      />
                    }
                  </div>
                </div>
              </div>
            );
          })}
          <button
              className="text-gray-700 hover:bg-gray-700 hover:text-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-xl px-10 py-2"
              onClick={() => addQuestion()}
              type="button"
          >
            Add New Question
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-xl px-10 py-2"
            type="button"
            onClick={handleClickOpen}
          >
            Save Questions
          </button>

          {/* confirmation modal */}
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <div class="p-3 text-center">
                <svg
                  aria-hidden="true"
                  class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 class="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400 font-nunito">
                  Are you sure you want to add this question?
                </h3>
              </div>
            </DialogContent>
            <DialogActions class="p-3 text-center">
              <Link
                data-modal-hide="popup-modal"
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                onClick={handleClose}
                to="/ThankYou"
              >
                Yes, I'm sure
              </Link>
              {/* <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                // onClick={handleClose}
                to="/ThankYou"
              >
                No, cancel
              </button> */}
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default Form;