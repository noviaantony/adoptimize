import React from "react";
import Header from "../../components/common/misc/Header";
import { Navigate, Link } from "react-router-dom";
const PetCareHomePage = () => {

  return (
    <div>
      <Header
        Title="Pet Care"
        Description="a full guide for adopters about cats and how to care for them! this page will help you alot in passing the pre-adoption quiz and being a new pet parent :)"
        className="mb-12"
      />

      <Link class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" to = "/PetCare">
        <span class="text-5xl font-nunito relative px-10 py-10 font-bold transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Cat Care Articles
        </span>
      </Link>
      <Link class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="text-5xl font-nunito relative px-10 py-10 font-bold transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Dog Care Articles
        </span>
      </Link>
      
    </div>
  );
};

export default PetCareHomePage;
