import React, {Fragment, useState, useEffect} from 'react'
import PetCard2 from '../../components/shelter/mypets/PetCard2'
import Header from "../../components/common/misc/Header";
import {motion} from "framer-motion";
import { IoAdd } from "react-icons/io5";
import { hotjar} from "react-hotjar";
import  Mouseflow from "./Mouseflow.jsx";

import {Accordion, AccordionBody, AccordionHeader,} from "@material-tailwind/react";
import { Carousel } from 'antd';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';


  // const hotjarScript = `
  //       (function(h,o,t,j,a,r){
  //       h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //       h._hjSettings={hjid:3361643,hjsv:6};
  //       a=o.getElementsByTagName('head')[0];
  //       r=o.createElement('script');r.async=1;
  //       r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //       a.appendChild(r);
  //     })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  //   `;

  // const mouseflowScript = `
  //     <script type="text/javascript">
  //       window._mfq = window._mfq || [];
  //       (function() {
  //         var mf = document.createElement("script");
  //         mf.type = "text/javascript"; mf.defer = true;
  //         mf.src = "//cdn.mouseflow.com/projects/d0e76ce5-08d1-4d0e-a9a3-1d5ed90d9b3b.js";
  //         document.getElementsByTagName("head")[0].appendChild(mf);
  //       })();
  //   </script>
  // `;


const contentStyle = {
  margin: 0,
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',  
};

hotjar.initialize(3361643, 6);

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
      Breed: 'British SH',
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

    const [open, setOpen] = useState(1);
    const [showDishInfo, setshowDishInfo] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };


    const data = [
        {
            petId: 1,
            name: 'Add New Pet',
            breed: 'Siamese-Persian Mix',
            age: '1 year old',
            description: 'I was rescued from yishun with my sister! I enjoy eating tuna and wet food, and I love belly rubs. I hate being carried when I want to sleep :< I will bite if I dont wanna be touched. I am shy to strangers, but I love my humans. ',
            medical: 'Full Vacinated, Sterilised, De-flead, FIV Negative, Microchipped, De-wormed. Slight PICA',
            requirements: 'Timothee requires lots of love and attention, hence adopters will be required to play with him everyday. Timothee does try to eat foreign objects and will require extra attention. Timothee also only eats wet food and will need that too. To ensure the safety of all cats, interested adopters must FULLY mesh their windows as most cats would be tempted to go to the ledge. This is extremely important to ensure that our cats will not be injured.'
        }
    ];

    const [petData, setPetData] = useState(data)
    const onChangeInput = (e, id) => {
    const { Name, value } = e.target

    const editData = petData.map((item) =>
      item.id === id && Name ? { ...item, [Name]: value } : item
    )

        setPetData(editData)
    } 

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen = () => {
        setOpen2(true);
    };

    const handleClose = () => {
        setOpen2(false);
    };





  return (
    <>
      <Header
        Title="Wulf's Cat Rescue"
        Description="browse all listed pets and edit your pet gallery here!"
      />
      {/*<div*/}
      {/*    style={{ display: 'none' }}*/}
      {/*    dangerouslySetInnerHTML={{ __html: hotjarScript }}*/}
      {/*/>*/}
      {/*<div*/}
      {/*    style={{ display: 'none' }}*/}
      {/*    dangerouslySetInnerHTML={{ __html: mouseflowScript }}*/}
      {/*/>*/}
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
                placeholder="Search for pet by name"
                required=""
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              
              
              <select class="ui dropdown rounded-xl ml-3">
                <option value="1">Domestic Shorthair</option>
                <option value="0">Ginger</option>
                <option value="2">British Shorthair</option>
                <option value="3">Siamese</option>
                <option value="4">Ragdoll</option>
                <option value="5">Bengal</option>
              </select>

              <select class="ui dropdown rounded-xl ml-3">
                <option value="1">Small</option>
                <option value="0">Medium</option>
                <option value="2">Large</option>
              </select>
              

              <select class="ui dropdown rounded-xl ml-3">
                <option value="1">Below 1 year</option>
                <option value="0">1-5 years</option>
                <option value="2">More than 6 years</option>
              </select>


              

              <button
                className="ml-4 inline-flex items-center py-2 px-3 text-xs font-xs text-center text-white bg-[#050a30] rounded-lg focus:outline-none transition duration-300 mr-3 font-semibold hover:bg-gray-500 hover:text-white"
                data-tooltip-target="tooltip-default"
                type="button" onClick={() => setshowDishInfo(true)}
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


              {/* add new pet modal */}

                 {showDishInfo ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div
                                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div
                                            className="text-center items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t mt-5">
                                            <h3 className="text-3xl font-semibold mx-32">Add New Pet to Adoptsy!</h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setshowDishInfo(false)}
                                            >
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-gray-700 text-lg leading-relaxed">
                                                <Fragment>
                                                    <Accordion open={open === 1}>
                                                        <AccordionHeader onClick={() => handleOpen(1)}>
                                                            Name, Breed, Age
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                          <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter Name, Breed and Age with commas"
                                                          />
                                                        </AccordionBody>
                                                    </Accordion>
                                               
                                                    <Accordion open={open === 4}>
                                                        <AccordionHeader onClick={() => handleOpen(4)}>
                                                            My Purrsonality
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                          <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Add a detailed description about the pet's personality"
                                                          />
                                                        </AccordionBody>
                                                    </Accordion>
                                                    <Accordion open={open === 5}>
                                                        <AccordionHeader onClick={() => handleOpen(5)}>
                                                        Medical Details
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                          <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Add information on the pet's medical history (eg: Vaccinated/Mircochipped"
                                                          />
                                                        </AccordionBody>
                                                    </Accordion>
                                                    <Accordion open={open === 6}>
                                                        <AccordionHeader onClick={() => handleOpen(6)}>
                                                        Adopter Requirements
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                          <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter specific requiements for adopters"
                                                          />
                                                        </AccordionBody>
                                                    </Accordion>


                                                    <Accordion open={open === 7}>
                                                        <AccordionHeader onClick={() => handleOpen(7)}>
                                                        Adoption Fee
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                          <input type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter full adoption fee"
                                                          />
                                                        </AccordionBody>
                                                    </Accordion>
                                                   

                                                  
                                                    <p className="my-4 text-gray-700 text-lg leading-relaxed font-bold">Upload Pet Pictures:</p>
                                                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

                                                </Fragment>
                                            </p>
                                        </div>
                                        {/*footer*/}
                                        <div
                                            className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setshowDishInfo(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setshowDishInfo(false)}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}

              {/* add new pet modal */}


            </div>
          </div>
        </form>
        {/* searchbar end */}




        <div className="mx-32">
        
            
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">

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




      <Mouseflow />
    </>
  );
}

export default MyPets
