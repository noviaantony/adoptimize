import React, {useState} from 'react'
import Header from '../../components/common/misc/Header' 
import PetCard3 from '../../components/adopter/petsearch/PetCard3'
import '../../App.css'
import {motion} from "framer-motion";

const PetSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const petsData = [
        {
            name: 'Doge2',
            type: 'dog',
            breed: 'dog breed',
            sex: 'male',
            age: '5',
            description: 'omg a doggo',
            medical: 'take it to the vet bro',
            requirements: 'take care of your dog bro',
            sheltername: 'shelterlol',
            sheltercontact: '+65 12345678',
            image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        },
        {
            name: 'Tom2',
            type: 'cat',
            breed: 'cat breed',
            sex: 'male',
            age: '7',
            description: 'omg a meow meow',
            medical: 'take it to the vet bro',
            requirements: 'take care of your cat bro',
            sheltername: 'shelterlol',
            sheltercontact: '+65 12345678',
            image: 'https://images.unsplash.com/photo-1511876849877-f8d0d953d2e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        }
    ]
    return (
        <div className='pet-search' class="items-center">
            <Header Title = "Search for Pets" Description = "Look for your new furry companion!"/>
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
                                    placeholder="Search by Shelter"
                                    required=""
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </form>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            <motion.div
                className="text-center lg:text-left actions flex flex-wrap -mx-1 lg:-mx-4"
                animate={{opacity: 1}}
                initial={{opacity: 0}}>
                {petsData
                    .filter((pet) => {
                        if (searchTerm == "") {
                            return pet;
                           } else if (
                                pet.sheltername
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                            ) {
                                return pet;
                                }
                    })
                        .map((pet) => {
                        return (
                            <PetCard3
                            name = {pet.name}
                            type={pet.type}
                            breed = {pet.breed}
                            sex = {pet.sex}
                            age = {pet.age}
                            description = {pet.description}
                            medical = {pet.medical}
                            sheltername={pet.sheltername}
                            sheltercontact={pet.sheltercontact}
                            image={pet.image}/>
                        );
                        })}
                        </motion.div>
            </div>
        </div>
    );
}

export default PetSearch;