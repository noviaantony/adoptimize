import React, {useState, useEffect} from 'react'
// import PetCard from '../../components/shelter/mypets/PetCard'
import PetCard2 from '../../components/shelter/mypets/PetCard2'
// import Searchbar from  '../../components/shelter/mypets/Searchbar'
// import Carousel from  '../../components/shelter/mypets/Slider'
import Header from "../../components/common/misc/Header";
import {motion} from "framer-motion";
import { IoAdd } from "react-icons/io5";

const MyPets = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [openTab, setOpenTab] = React.useState(1);

  const petList = [
    {
      Name: 'Timothee Catlamet',
      Breed: 'Ragdoll',
      Sex: 'Male',
      Age: 1,
      Image1: 'https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image2: 'https://images.unsplash.com/photo-1620933288385-b2f6f1931d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image3: 'https://images.unsplash.com/photo-1568470010257-111aa304d53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image4: 'https://images.unsplash.com/photo-1586417752912-b0389b445a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      Name: 'Catmilla Cabello',
      Breed: 'Bengal',
      Sex: 'Female',
      Age: 4,
      Image1: 'https://images.unsplash.com/photo-1603277160434-df7471138363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZ2FsJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      Image2: 'https://images.unsplash.com/photo-1496806195556-91bdded94209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVuZ2FsJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      Image3: 'https://images.unsplash.com/photo-1598463166228-c0f90d180918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVuZ2FsJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      Image4: 'https://images.unsplash.com/photo-1516750484197-6b28d10c91ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlbmdhbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      Name: 'Sir Meowington',
      Breed: 'Ginger',
      Sex: 'Male',
      Age: 10,
      Image1: 'https://images.unsplash.com/photo-1594367031514-3aee0295ec98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2luZ2VyJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      Image2: 'https://images.unsplash.com/photo-1583687534963-565854a3d6d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2luZ2VyJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      Image3: 'https://images.unsplash.com/photo-1577980906127-4ea7faa2c6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpbmdlciUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image4: 'https://images.unsplash.com/photo-1577981013335-2a43c0f0cce5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpbmdlciUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      Name: 'Pawl',
      Breed: 'Siamese',
      Sex: 'Male',
      Age: 3,
      Image1:'https://images.unsplash.com/photo-1572590603603-f828f6682212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2lhbWVzZSUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image2: 'https://media.istockphoto.com/id/1394116178/photo/siamese-kitten-standing-on-lawn.jpg?b=1&s=170667a&w=0&k=20&c=QbxxA-rgwyuDDz6iTmOTyYJW215qMq33sFt4P2KzELA=',
      Image3: 'https://images.unsplash.com/photo-1613064504039-bb89104af499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpYW1lc2UlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      Image4: 'https://media.istockphoto.com/id/1394116178/photo/siamese-kitten-standing-on-lawn.jpg?b=1&s=170667a&w=0&k=20&c=QbxxA-rgwyuDDz6iTmOTyYJW215qMq33sFt4P2KzELA='
    },
    {
      Name: 'Catti B',
      Breed: 'British Shorthair',
      Sex: 'Female',
      Age: 8,
      Image1:'https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image2: 'https://images.unsplash.com/photo-1636278697015-a5592cfa04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyaXRpc2glMjBzaG9ydCUyMGhhaXIlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      Image3: 'https://images.unsplash.com/photo-1568470010257-111aa304d53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image4: 'https://images.unsplash.com/photo-1636278697015-a5592cfa04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyaXRpc2glMjBzaG9ydCUyMGhhaXIlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      Name: 'Kitty Purry',
      Breed: 'Maine Coon',
      Sex: 'Female',
      Age: 6,
      Image1:'https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image2: 'https://images.unsplash.com/photo-1602779717445-b15fa367c13d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1haW5lJTIwY29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image3: 'https://images.unsplash.com/photo-1568470010257-111aa304d53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image4: 'https://images.unsplash.com/photo-1586417752912-b0389b445a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <>
      <Header
        Title="Project Luni's Pet Gallery"
        Description="browse all listed pets and edit your pet gallery here!"
      />

      <div className="items-center">
        {/* searchbar start */}
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
                className="ml-4 inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#050a30] rounded-lg focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-500 hover:text-white"
                data-tooltip-target="tooltip-default"
                type="button"
              >
                <div
                  id="tooltip-default"
                  role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-500 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Add Pet
                </div>
                <IoAdd size={40} />
              </button>
            </div>
          </div>
        </form>
        {/* searchbar end */}

        {/* <button>Ragdoll</button> */}

        <div className="mx-96">
          <ul
            className="flex mb-0 list-none pt-3 pb-4 mt-12"
            // role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded-xl leading-normal font-nunito text-black " +
                  (openTab === 1
                    ? "text-white bg-blue-100"
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
                All
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded-xl leading-normal font-nunito text-black " +
                  (openTab === 2
                    ? "text-white bg-blue-100"
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
                Bengal
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded-xl leading-normal font-nunito text-black " +
                  (openTab === 3
                    ? "text-white bg-blue-100"
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
                British Shorthair
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded-xl leading-normal font-nunito text-black " +
                  (openTab === 4
                    ? "text-white bg-blue-100"
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
                Munchkin
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded-xl leading-normal font-nunito text-black " +
                  (openTab === 5
                    ? "text-white bg-blue-100"
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
                Ginger
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <motion.div class="container my-12 mx-auto px-4 md:px-12">
                    <div class="flex flex-wrap -mx-1 lg:-mx-4">
                      {petList
                        .filter((pet) => {
                          if (searchTerm == "") {
                            return pet;
                          } else if (
                            pet.Name.toLowerCase().includes(
                              searchTerm.toLowerCase()
                            )
                          ) {
                            return pet;
                          }
                        })
                        .map((pet) => {
                          return (
                            <PetCard2
                              Name={pet.Name}
                              Age={pet.Age}
                              Breed={pet.Breed}
                              Sex={pet.Sex}
                              Image1={pet.Image1}
                              Image2={pet.Image2}
                              Image3={pet.Image3}
                              Image4={pet.Image4}
                            />
                          );
                        })}
                    </div>
                  </motion.div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div class="container my-12 mx-auto px-4 md:px-12">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                      {petList
                        .filter((pet) => {
                          if (pet.Breed == "Bengal") {
                            return pet;
                          }
                        })
                        .filter((pet) => {
                          if (searchTerm == "") {
                            return pet;
                          } else if (
                            pet.Name.toLowerCase().includes(
                              searchTerm.toLowerCase()
                            )
                          ) {
                            return pet;
                          }
                        })
                        .map((pet) => {
                          return (
                            <PetCard2
                              Name={pet.Name}
                              Age={pet.Age}
                              Breed={pet.Breed}
                              Sex={pet.Sex}
                              Image1={pet.Image1}
                              Image2={pet.Image2}
                              Image3={pet.Image3}
                              Image4={pet.Image4}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div class="container my-12 mx-auto px-4 md:px-12">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                      {petList
                        .filter((pet) => {
                          if (pet.Breed == "British Shorthair") {
                            return pet;
                          }
                        })
                        .filter((pet) => {
                          if (searchTerm == "") {
                            return pet;
                          } else if (
                            pet.Name.toLowerCase().includes(
                              searchTerm.toLowerCase()
                            )
                          ) {
                            return pet;
                          }
                        })

                        .map((pet) => {
                          return (
                            <PetCard2
                              Name={pet.Name}
                              Age={pet.Age}
                              Breed={pet.Breed}
                              Sex={pet.Sex}
                              Image1={pet.Image1}
                              Image2={pet.Image2}
                              Image3={pet.Image3}
                              Image4={pet.Image4}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link1">
                  <motion.div class="container my-12 mx-auto px-4 md:px-12">
                    <div class="flex flex-wrap -mx-1 lg:-mx-4">
                      {petList
                        .filter((pet) => {
                          if (pet.Breed == "Munchkin") {
                            return pet;
                          }
                        })
                        .filter((pet) => {
                          if (searchTerm == "") {
                            return pet;
                          } else if (
                            pet.Name.toLowerCase().includes(
                              searchTerm.toLowerCase()
                            )
                          ) {
                            return pet;
                          }
                        })

                        .map((pet) => {
                          return (
                            <PetCard2
                              Name={pet.Name}
                              Age={pet.Age}
                              Breed={pet.Breed}
                              Sex={pet.Sex}
                              Image1={pet.Image1}
                              Image2={pet.Image2}
                              Image3={pet.Image3}
                              Image4={pet.Image4}
                            />
                          );
                        })}
                    </div>
                  </motion.div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link1">
                  {/* Fashion pets */}
                  <motion.div class="container my-12 mx-auto px-4 md:px-12">
                    <div class="flex flex-wrap -mx-1 lg:-mx-4">
                      {petList
                        .filter((pet) => {
                          if (pet.Breed == "Ginger") {
                            return pet;
                          }
                        })
                        .filter((pet) => {
                          if (searchTerm == "") {
                            return pet;
                          } else if (
                            pet.Name.toLowerCase().includes(
                              searchTerm.toLowerCase()
                            )
                          ) {
                            return pet;
                          }
                        })
                        .map((pet) => {
                          return (
                            <PetCard2
                              Name={pet.Name}
                              Age={pet.Age}
                              Breed={pet.Breed}
                              Sex={pet.Sex}
                              Image1={pet.Image1}
                              Image2={pet.Image2}
                              Image3={pet.Image3}
                              Image4={pet.Image4}
                            />
                          );
                        })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPets
