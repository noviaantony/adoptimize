import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import ConfirmationModal from "../../common/misc/ConfirmationModal";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";

import { HiFolderDownload } from "react-icons/hi";
import { Calendar } from "react-modern-calendar-datepicker";

const WaitListTable = () => {
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

    const [selectedDay, setSelectedDay] = useState(null);


  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-16 mt-12"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                (openTab === 1
                  ? "text-black bg-blue-100"
                  : "text-grey-700 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              On-going
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                (openTab === 2
                  ? "text-black bg-blue-100"
                  : "text-grey-700 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Waitlist
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                (openTab === 3
                  ? "text-black bg-blue-100"
                  : "text-grey-700 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Rejected
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                (openTab === 4
                  ? "text-black bg-blue-100"
                  : "text-grey-700 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Zoom Scheduler
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div className="flex justify-start mt-16 ml-96">
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
                Choose the timings for each day that you are available to do
                zoom meetings:
              </div>
              <button
                className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-blue-900 text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
              >
                8.30 AM
              </button>
              <button
                className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-blue-900 text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
              >
                9.30 AM
              </button>
              <button
                className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-blue-900 text-center rounded-md sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito mx-5"
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
          <button
            className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-col justify-center items-center py-4 rounded w-4/6 ml-96"
            onClick={handleClickOpen}
          >
            <div>
              <p className="text-base leading-4 font-bold">
                Confirm Availability
              </p>
            </div>
          </button>
        </div>
      </div>

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
              Are you sure you would like to confirm the your availability for
              16th February 2023: 8.30AM, 9.30AM?
            </h3>
          </div>
        </DialogContent>
        <DialogActions class="p-3 text-center">
          <button
            data-modal-hide="popup-modal"
            type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            onClick={handleClose}
          >
            Yes, I'm sure
          </button>
          <button
            data-modal-hide="popup-modal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={handleClose}
          >
            No, cancel
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WaitListTable;

/*


                
                  


*/
