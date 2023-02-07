import React, {useState} from 'react'
import { Navigate, Link } from "react-router-dom";

const Table = () => {

  // ongoing adoptiondata
  const adoptionData = [
    {
      name: 'Emma Waltz',
      application: 'Pawl',
      contact: '+65 1234 5678',
      email: 'emma@gmail.com',
      score: '80%',
      info: 'download',
      phase: 'Pending Interview', // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents:'download',
      zoom: 'link',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      status: 'On-going',
      timeeplased: '7 days'

    },
    {
      name: 'Steven Jobs',
      application: 'Catti B',
      contact: '+65 1234 5678',
      email: 'steven@yahoo.com',
      score: '100%',
      info: 'download',
      phase: 'Pending Collection', // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents:'download',
      zoom: 'link',
      image: 'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      status: 'On-going',
      timeeplased: '13 days'
    },
    {
      name: 'Anna Lim',
      application: 'Sir Meowington',
      contact: '+65 1234 5678',
      email: 'anna@yahoo.com',
      score: '90%',
      info: 'download',
      phase: 'Pending Documents', // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents:'download',
      zoom: 'link',
      image: 'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      status: 'On-going',
      timeeplased: '5 days'
    },
    {
      name: 'Atiqah',
      application: 'Timothee Catlamet',
      contact: '+65 1234 5678',
      email: 'ati@yahoo.com',
      score: '100%',
      info: 'download',
      phase: 'Pending Collection', // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents:'download',
      zoom: 'link',
      image: 'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      status: 'On-going',
      timeeplased: '14 days'
    },
    {
      name: 'Tommy Chan',
      application: 'Catmila Cebllo',
      contact: '+65 1234 5678',
      email: 'tom@yahoo.com',
      score: '100%',
      info: 'download',
      phase: 'Pending Home Check', // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents:'download',
      zoom: 'link',
      image: 'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      status: 'On-going',
      timeeplased: '8 days'
    },
    {
      name: 'Divya ',
      application: 'Kitty Purry',
      contact: '+65 1234 5678',
      email: 'divya@gmail.com',
      score: '100%',
      info: 'download',
      phase: 'Incomplete Quiz/Screening', // options: Collection, Pending Interview, Pending Home Check, Completed,
      documents:'download',
      zoom: 'link',
      image: 'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      status: 'On-going',
      timeeplased: '2 days'
    },

  ]

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

<div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mx-32 mt-20 mb-60">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Adopter</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Application</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Phase</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Contact</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Email</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Quiz Score</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Pre-Screening</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Documents</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Zoom</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Time Elapsed</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Actions</th>      
      </tr>
    </thead>








    <tbody class="divide-y divide-gray-100 border-t border-gray-100 font-nunito">
      {adoptionData.map((data) => {
      return (                                                          
      <tr  className ={data.phase == "Pending Collection" || data.phase == "Pending Home Check" ?   "bg-red-50 hover:bg-grey-50" : "hover:bg-grey-50" }>

        {/* adopter */}
        <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="text-sm">
            <div class="font-medium text-gray-700">{data.name}</div>
          </div>
        </td>

        {/* application */}
        <td>
          <div class="text-sm">
            <div class="font-medium text-gray-700">{data.application}</div>
          </div>
        </td>

        {/* phase*/}
        <td class="px-6 py-4">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 uppercase"
          > 

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
          <a href="./Sample.pdf" download>{data.documents}</a>
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
      </tr>
           );
      })}
    </tbody>
  </table>
</div>
      

      
    </>
  )
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