import React, {useState} from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";


import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";


const Ongoing = () => {
  const [value, setValue] = React.useState(null);

  const steps = [
    "Quiz",
    "Pre-Screening Questions",
    "Document Checks",
    "Zoom Interview & Homecheck",
    "Approval",
    "Schedule Collection",
    "Payment",
    "Trial Week",
    "Post-Adoption Follow-Up",
    "Adoption Complete",
  ];

  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("Singapore");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  const [selectedDay, setSelectedDay] = useState(null);

  const MyDoc = () => (
    <Document>
      <Page> My document data</Page>
    </Document>
  );

  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];
  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result);
        };
      } else {
        setPdfFile(null);
      }
    } else {
      console.log("please select");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const newplugin = defaultLayoutPlugin();

  // confirmation modal functions & useStates
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  //

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-12 mb-32 font-nunito">
      <Box sx={{ width: "100%", font: "nunito" }}>
        <Stepper activeStep={7} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* pet you are adopting */}
      <div className="flex justify-center mt-16">
        <div
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row  w-6/6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="w-32 h-32 my-5 mx-5 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Bonnie image"
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h1 class="mb-2 text-4xl font-bold  text-gray-900 dark:text-white">
              Your are giving Timothee Catlamet a forever home!
            </h1>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
              you are going through the trial week!
            </p>
            <button className='text-blue-500 underline'>Cancel Adoption</button>
          </div>
        </div>
      </div>

      {/* payment form */}
      {/* <div className="flex flex-col justify-start items-start w-full space-y-9 ml-96">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full ml-28">
          <div className="p-8 flex flex-col lg:w-full xl:w-3/5">
                <div className="mt-8">
                  <label className="mt-8 text-base leading-4 text-gray-800">Email</label>
                    <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" />
                </div>
                <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                <div className="mt-2 flex-col">
                    <div>
                        <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" />
                    </div>
                    <div className="flex-row flex">
                        <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
                        <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
                    </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                <div className="mt-2 flex-col">
                    <div>
                        <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
                    </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
                <div className="mt-2 flex-col">
                    <div className="relative">
                        <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                            {country}
                        </button>
                        <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
                            {countries.map((country) => (
                                <div key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText}>
                                    {country}
                                </div>
                            ))}
                        </div>
                    </div>
                    <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ZIP" />
                </div>

                <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                    <div>
                        <p className="text-base leading-4">Make Payment</p>
                    </div>
                </button>
            </div>
        </div>
    </div> */}
      {/* payment form end */}

      {/* pre-screening questions */}
      {/* <div className="mt-20">
        <div class="mb-12 mx-64 font-nunito">
          <label
            for="large-input"
            class="block mb-2 text-xl text-gray-900 dark:text-white font-bold"
          >
            Sample Screening Question 1:
          </label>
          <input
            type="text"
            id="large-input"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito"
            placeholder="Enter Description About Your Shelter"
          />
        </div>
        <div class="mb-12 mx-64 font-nunito">
          <label
            for="large-input"
            class="block mb-2 text-xl text-gray-900 dark:text-white font-bold"
          >
            Sample Screening Question 2:
          </label>

          <input
            type="text"
            id="large-input"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito"
            placeholder="Enter Detailed Description About Adoption Process For Your Shelter"
          />
        </div>
        <div class="mb-12 mx-64 font-nunito">
          <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-col justify-center items-center py-4 rounded w-4/6 ml-96">
            <div>
              <p className="text-base leading-4 font-bold">Submit Questions</p>
            </div>
          </button>
        </div>
      </div> */}
      {/* pre-screening questions end */}

      {/* zoom scheduler */}
      {/* <div className="flex justify-start mt-16 ml-96">
        <div
          href="#"
          class="flex flex-col items-center ml-52 bg-white border border-gray-200 rounded-lg md:flex-row  w-6/6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
        >
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
          />
          <div className="ml-40 grid-cols-3">
            <div className="text-3xl mb-5">
              Choose a timing for your zoom meeting with the shelter to do a homecheck:
            </div>
            <button
              className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
            >
              8.30 AM
            </button>
            <button
              className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
            >
              9.30 AM
            </button>
            <button
              className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
            >
              10.30 AM
            </button>
            <button
              className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
            >
              11.30 AM
            </button>
            <button
              className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
            >
              12.30 AM
            </button>
            <button
              className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
            >
              2.30 PM
            </button>
            <button
              className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
            >
              3.30 PM
            </button>
            <button
              className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
            >
              4.30 PM
            </button>
          </div>
        </div>
      </div>
      <div class="mb-12 mx-96 font-nunito">
        <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-col justify-center items-center py-4 rounded w-4/6 ml-96">
          <div>
            <p className="text-base leading-4 font-bold">Schedule Zoom Meeting</p>
          </div>
        </button>
      </div>  */}
      {/* zoom scheduler end}

      {/* document download & upload */}
      {/* <div className="mt-16">
        <PDFDownloadLink
          document={<MyDoc />}
          fileName="somename.pdf"
          className="bg-gray-700 ml-3 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-md font-nunito text-2xl"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Adoption Documents"
          }
        </PDFDownloadLink>

        <form onSubmit={handleSubmit} className="font-nunito mb-6">
          <input
            class="w-62 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-xl"
            id="file_input"
            type="file"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-gray-700 ml-3 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold text-xl rounded-md font-nunito px-10 py-2 text-md mt-10"
          >
            Upload PDF
          </button>
        </form>

        <div className="pdf-container mt-20 ml-64">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
            {viewPdf && (
              <>
                <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
              </>
            )}
            {!viewPdf && <>No PDF Uploaded</>}
          </Worker>
        </div>
      </div>

      <button
        class="bg-gray-700 hover:bg-gray-500 focus:bg-white focus:text-gray-500 transition duration-300 text-white font-bold py-2 px-4 rounded-full font-nunito text-sm px-10 py-2 text-xl mt-8"
        onClick={handleClickOpen}
      >
        Save Information
      </button> */}
      {/* document download & upload end */}
    </div>
  );
}

export default Ongoing;
