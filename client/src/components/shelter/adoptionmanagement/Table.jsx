import React, {useState} from 'react'
import { Navigate, Link } from "react-router-dom";
import ConfirmationModal from "../../common/misc/ConfirmationModal"; 

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";

import { HiFolderDownload } from "react-icons/hi";


const Table = () => {
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


  // ongoing adoptiondata
  const adoptionData = [
    {
      name: "Emma Waltz",
      application: "Pawl",
      contact: "+65 1234 5678",
      email: "emma@gmail.com",
      score: "80%",
      info: "download",
      phase: "Pending Interview", // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents: "download",
      zoom: "link",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      status: "On-going",
      timeeplased: "7 days",
      approval: false,
    },
    {
      name: "Steven Jobs",
      application: "Catti B",
      contact: "+65 1234 5678",
      email: "steven@yahoo.com",
      score: "100%",
      info: "download",
      phase: "Pending Approval", // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents: "download",
      zoom: "link",
      image:
        "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      status: "On-going",
      timeeplased: "13 days",
      approval: true,
    },
    {
      name: "Anna Lim",
      application: "Sir Meowington",
      contact: "+65 1234 5678",
      email: "anna@yahoo.com",
      score: "90%",
      info: "download",
      phase: "Pending Documents", // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents: "download",
      zoom: "link",
      image:
        "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      status: "On-going",
      timeeplased: "5 days",
      approval: false,
    },
    {
      name: "Atiqah",
      application: "Timothee Catlamet",
      contact: "+65 1234 5678",
      email: "ati@yahoo.com",
      score: "100%",
      info: "download",
      phase: "Pending Approva", // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents: "download",
      zoom: "link",
      image:
        "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      status: "On-going",
      timeeplased: "14 days",
      approval: false,
    },
    {
      name: "Tommy Chan",
      application: "Catmila Cebllo",
      contact: "+65 1234 5678",
      email: "tom@yahoo.com",
      score: "100%",
      info: "download",
      phase: "Pending Approval", // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents: "download",
      zoom: "link",
      image:
        "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      status: "On-going",
      timeeplased: "8 days",
      approval: true,
    },
    {
      name: "Divya ",
      application: "Kitty Purry",
      contact: "+65 1234 5678",
      email: "divya@gmail.com",
      score: "100%",
      info: "download",
      phase: "Incomplete Quiz/Screening", // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents: "download",
      zoom: "link",
      image:
        "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      status: "On-going",
      timeeplased: "2 days",
      approval: false,
    },
  ];

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
        </ul>
      </div>

      <div className="items-center">
        {/* searchbar start */}
        <form className="m-10 mx-64">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-row">
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border font-nunito"
                placeholder="Search for adopter by name"
                required=""
                // onChange={(event) => {
                //   setSearchTerm(event.target.value);
                // }}
              />

              <select class="ui dropdown rounded-xl ml-3">
                <option value="1">Choose Phase</option>
                <option value="0">Pending Quiz</option>
                <option value="2">Pending Document Upload</option>
                <option value="3">Pending Pre-Screening</option>
                <option value="4">Home Check</option>
                <option value="5">Interview</option>
                <option value="6">Pending Payment</option>
                <option value="7">Pending Collection</option>
                <option value="8">Trial Week</option>
              </select>

              <button className=" ml-6 bg-white rounded-xl ">
                <HiFolderDownload size={60} className="px-2 " />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mx-32 mt-20 mb-60">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Adopter
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Application
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Phase
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Contact
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Email
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Quiz Score
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Pre-Screening
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Documents
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Zoom
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Time Elapsed
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Approved?
              </th>

              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100 border-t border-gray-100 font-nunito">
            {adoptionData.map((data) => {
              return (
                <tr
                  className={
                    data.phase == "Pending Collection" ||
                    data.phase == "Pending Home Check" ||
                    data.phase == "Pending Approval"
                      ? "bg-red-50 hover:bg-grey-50"
                      : "hover:bg-grey-50"
                  }
                >
                  {/* adopter */}
                  <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div class="text-sm">
                      <div class="font-medium text-gray-700">{data.name}</div>
                    </div>
                  </td>

                  {/* application */}
                  <td>
                    <div class="text-sm">
                      <div class="font-medium text-gray-700">
                        {data.application}
                      </div>
                    </div>
                  </td>

                  {/* phase*/}
                  <td class="px-6 py-4">
                    <span class=" inline-flex justify-center gap-1 rounded-full bg-blue-50 px-6 py-2 text-xs font-semibold text-blue-600 uppercase">
                      {data.phase}
                    </span>
                  </td>

                  {/* contact */}
                  <td class="px-6 py-4">{data.contact}</td>

                  {/* email*/}
                  <td class="px-6 py-4">
                    <a href="">{data.email}</a>
                  </td>

                  {/* email*/}
                  <td class="px-6 py-4">
                    <a href="">{data.score}</a>
                  </td>

                  <td class="px-6 py-4 text-blue-600">
                    <a href="./Sample.pdf" download>
                      {data.documents}
                    </a>
                  </td>

                  <td class="px-6 py-4 text-blue-600">
                    <a href="">{data.documents}</a>
                  </td>

                  <td class="px-6 py-4 text-blue-600">
                    <a href="">{data.zoom}</a>
                  </td>

                  <td class="px-6 py-4">
                    <a href="">{data.timeeplased}</a>
                  </td>

                  <td>
                    <button
                      className="bg-primary-500 focus:bg-primary-700 focus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300
                px-7 py-2 w-full bg-[#050a30] text-center rounded-md block sm:w-auto font-bold hover:bg-blue-900 hover:text-white text-white font-nunito"
                      onClick={handleClickOpen}
                    >
                      Approve Adoption
                    </button>
                  </td>

                  <td class="px-6 py-4 flex items-center">
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
                  </td>

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
                          Are you sure you would like to approve {data.name} for
                          adoption?
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* confirmation modal */}
    </>
  );
}

export default Table;



                            // <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
                            //     <div className="px-4 py-5 flex-auto">
                            //         <div className="tab-content tab-space">
                            //             <div
                            //                 className={openTab === 1 ? "block" : "hidden"}
                            //                 id="link1"
                            //             >
                            //                 {/* Fashion Rewards */}
                            //                 <motion.div class="container my-12 mx-auto px-4 md:px-12">
                            //                     <div class="flex flex-wrap -mx-1 lg:-mx-4">
                            //                         {rewardList
                            //                             .filter((reward) => {
                            //                                 if (reward.rewardType == "Fashion") {
                            //                                     return reward;
                            //                                 }
                            //                             })
                            //                             .map((reward) => {
                            //                                 return (
                            //                                     <RewardCard
                            //                                         RewardId={reward.rewardId}
                            //                                         RewardBrandName={reward.brandName}
                            //                                         RewardName={reward.rewardName}
                            //                                         RewardPointsRequired={
                            //                                             reward.redemptionPointsRequired
                            //                                         }
                            //                                         RewardImage={reward.imageAddress}
                            //                                         RewardDescription={reward.rewardDescription}
                            //                                         RewardWebsite={reward.website}
                            //                                         UserPoints={userRewardPoints}
                            //                                         UserTransactions={userTransactions}
                            //                                     />
                            //                                 );
                            //                             })}
                            //                     </div>
                            //                 </motion.div>
                            //             </div>

                            //             <div
                            //                 className={openTab === 2 ? "block" : "hidden"}
                            //                 id="link2"
                            //             >
                            //                 {/* Food Rewards */}
                            //                 <div class="container my-12 mx-auto px-4 md:px-12">
                            //                     <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            //                         {rewardList
                            //                             .filter((reward) => {
                            //                                 if (reward.rewardType == "Food") {
                            //                                     return reward;
                            //                                 }
                            //                             })
                            //                             .map((reward) => {
                            //                                 return (
                            //                                     <RewardCard
                            //                                         RewardId={reward.rewardId}
                            //                                         RewardBrandName={reward.brandName}
                            //                                         RewardName={reward.rewardName}
                            //                                         RewardPointsRequired={
                            //                                             reward.redemptionPointsRequired
                            //                                         }
                            //                                         RewardImage={reward.imageAddress}
                            //                                         RewardDescription={reward.rewardDescription}
                            //                                         RewardWebsite={reward.website}
                            //                                         UserPoints={userRewardPoints}
                            //                                         UserTransactions={userTransactions}
                            //                                     />
                            //                                 );
                            //                             })}
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //             <div
                            //                 className={openTab === 3 ? "block" : "hidden"}
                            //                 id="link3"
                            //             >
                            //                 {/* Transport Rewards */}
                            //                 <div class="container my-12 mx-auto px-4 md:px-12">
                            //                     <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            //                         {rewardList
                            //                             .filter((reward) => {
                            //                                 if (reward.rewardType == "Transport") {
                            //                                     return reward;
                            //                                 }
                            //                             })
                            //                             .map((reward) => {
                            //                                 return (
                            //                                     <RewardCard
                            //                                         RewardId={reward.rewardId}
                            //                                         RewardBrandName={reward.brandName}
                            //                                         RewardName={reward.rewardName}
                            //                                         RewardPointsRequired={
                            //                                             reward.redemptionPointsRequired
                            //                                         }
                            //                                         RewardImage={reward.imageAddress}
                            //                                         RewardDescription={reward.rewardDescription}
                            //                                         RewardWebsite={reward.website}
                            //                                         UserPoints={userRewardPoints}
                            //                                         UserTransactions={userTransactions}
                            //                                     />
                            //                                 );
                            //                             })}
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>