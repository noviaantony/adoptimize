import { FiTarget, FiMail, FiCloud } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ReactComponent as Dashboard } from "./dashboard.svg";
import { ReactComponent as Email } from "./email.svg";
import { ReactComponent as Payment } from "./payment.svg";

function KeyFeatures() {
  return (
    // <div className="bg-[#f7af7a] py-10 font-nunito h-96">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="lg:text-center">
    //       <h2 className=" text-gray-900 font-black text-5xl tracking-wide uppercase mb-2">
    //         Key Features
    //       </h2>
    //     </div>
    //     <div className="mt-10">
    //       <div className="flex  -mx-4 justify-center">
    //         <div className="mx-4 mb-8 w-full sm:w-1/2 lg:w-1/3">
    //           <div className="bg-[#FDEDE1] rounded-lg shadow-md p-8">
    //             <div className="flex items-center mb-4">
    //               <div className="bg-354458 rounded-md p-3">
    //                 <FiTarget className="h-6 w-6 text-[#F7AF7A]" size = {80} />
    //               </div>
    //               <h3 className="ml-4 text-3xl font-medium text-gray-900">
    //                 Streamlining
    //               </h3>
    //             </div>
    //             <p className="text-md text-gray-600">
    //               Our software helps you streamline your adoption workflow and get more
    //               done in less time. We want you to focus your time on what matters more.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="mx-4 mb-8 w-full sm:w-1/2 lg:w-1/3">
    //           <div className="bg-[#FDEDE1] rounded-lg shadow-md p-8">
    //             <div className="flex items-center mb-4">
    //               <div className="bg-354458 rounded-md p-3">
    //                 <FiMail className="h-6 w-6 text-[#F7AF7A]" />
    //               </div>
    //               <h3 className="ml-4 text-3xl font-medium text-gray-900">
    //                 Smart Emails
    //               </h3>
    //             </div>
    //             <p className="text-md text-gray-600">
    //               Our software sends automated emails and texts upon to your adopters after each phase of the adoption process,
    //               helping you save time and energy.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="mx-4 mb-8 w-full sm:w-1/2 lg:w-1/3">
    //           <div className="bg-[#FDEDE1] rounded-lg shadow-md p-8">
    //             <div className="flex items-center mb-4">
    //               <div className="bg-354458 rounded-md p-3">
    //                 <FiCloud className="h-6 w-6 text-[#F7AF7A]" />
    //               </div>
    //               <h3 className="ml-4 text-3xl font-medium text-gray-900">
    //                 Cloud Storage
    //               </h3>
    //             </div>
    //             <p className="text-md text-gray-600">
    //               We help to securely store your shelter's data in the cloud, so that you would not have to worry about anything with us. Lorem ipsum dolor sit amet consectetur.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //

    <div>
      <section class="bg-white border-b py-8 font-default">
        <div className="lg:text-center">
          <h2 className=" text-gray-900 font-black text-5xl tracking-wide uppercase mb-2">
            Key Features 
          </h2>
        </div>
        <motion.div
          className="actions container max-w-5xl mx-auto m-8"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap ">
            <div class="w-5/6 sm:w-1/2 p-6 my-20 ">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Digitialize Adoption Management
              </h3>
              <p class="text-gray-600 mb-8 bg-[#FDEDE1] rounded-lg shadow-md p-8">
                Our platform streamlines adoption management by migrating all
                your adoption and pet data to our system. we aim to improve
                shelter's efficiency through a centralized platform for all
                stages of adoption management. Digitalise pre-screening forms,
                adoption contract signing and adoption fee payment with us!
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <div className="flex flex-row justify-center">
                <Dashboard />
              </div>
            </div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div className="flex flex-row justify-center">
                <Email />
              </div>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6 ">
              <div class="align-middle my-20">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Smart Emails & SMS
                </h3>
                <p class="text-gray-600 mb-8 bg-[#FDEDE1] rounded-lg shadow-md p-8">
                  We eliminate the need to manually communicate with your
                  adopter. our application automically sends emails &
                  text-messages to your adopters after each stage of the
                  adoption process, accompanied with a URL guiding them to the
                  next action they need to take.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 my-20">
                Free of Charge & Maximize Donations
              </h3>
              <p class="text-gray-600 mb-8 bg-[#FDEDE1] rounded-lg shadow-md p-8">
                We are completely free of charge for shelters! Simply sign up
                with us to save man-hours while driving donations through our
                platform
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <div className="flex flex-row justify-center">
                <Payment />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default KeyFeatures;
