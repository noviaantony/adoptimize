import React, {useState} from 'react'
import PetCard from '../../components/shelter/mypets/PetCard'
import PetCard2 from '../../components/shelter/mypets/PetCard2'
import Searchbar from  '../../components/shelter/mypets/Searchbar'
import Carousel from  '../../components/shelter/mypets/Slider'
import Header from "../../components/common/misc/Header";
import {motion} from "framer-motion";
import { IoAdd } from "react-icons/io5";

const MyPets = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const petList = [
    {
      Name: 'muffin',
      Breed: 'ragdoll',
      Sex: 'male',
      Age: 1
    },
    {
      Name: 'kuffin',
      Breed: 'ragdoll',
      Sex: 'male',
      Age: 1
    },
    {
      Name: 'buffin',
      Breed: 'ragdoll',
      Sex: 'male',
      Age: 1
    },
    {
      Name: 'wuffin',
      Breed: 'ragdoll',
      Sex: 'male',
      Age: 1
    }
  ];

  return (

    <>
    <Header
    Title="Project Luni's Pet Gallery"
    Description="browse all listed pets and edit your pet gallery here!"
    />

    
                <div className="items-center">
                    <form className="m-10 mx-50">
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
                                    placeholder="Search for foods,snacks,etc"
                                    required=""
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                    }}
                                />
                                <button
                                    className="ml-4 inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#050a30] rounded-lg focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-500 hover:text-white" data-tooltip-target="tooltip-default" 
                                    type="button"
                        
                                >
                                    <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-500 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Add Pet
                                    </div>
                                    <IoAdd size = {40}/>
                                    
                                </button>
                            </div>
                        </div>
                    </form>
                    <div class="container my-12 mx-auto px-4 md:px-12">
                        <motion.div
                            className="text-center lg:text-left actions flex flex-wrap -mx-1 lg:-mx-4"
                            animate={{opacity: 1}}
                            initial={{opacity: 0}}
                        >
                            {petList
                                .filter((pet) => {
                                    if (searchTerm == "") {
                                        return pet;
                                    } else if (
                                        pet.Name
                                            .toLowerCase()
                                            .includes(searchTerm.toLowerCase())
                                    ) {
                                        return pet;
                                    }
                                })
                                .map((pet) => {
                                    return (
                                        <PetCard2
                                        Name = {pet.Name}
                                        Age = {pet.Age}
                                        Breed = {pet.Breed}
                                        Sex = {pet.Sex}
                                        />
                                    );
                                })}
                        </motion.div>
                    </div>
                    </div>
{/* 
    <div class="container my-12 mx-auto px-4 md:px-12">
      <motion.div
          className="text-center lg:text-left actions flex flex-wrap -mx-1 lg:-mx-4"
          animate={{opacity: 1}}
          initial={{opacity: 0}}
      >
        <PetCard2/>
        <PetCard2/>
        <PetCard2/>
        <PetCard2/>
        <PetCard2/>

      </motion.div>
      </div> */}

    </>
  )
}

export default MyPets
