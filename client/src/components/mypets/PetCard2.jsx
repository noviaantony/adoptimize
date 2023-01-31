import React, {Fragment, useContext, useEffect, useState} from "react";
import {Accordion, AccordionBody, AccordionHeader,} from "@material-tailwind/react";
import Slider from './Slider'

const PetCard2 = ({Name, Breed, Sex, Age}) => {

    const [open, setOpen] = useState(1);
    const [showDishInfo, setshowDishInfo] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    const data = [
        {
            petId: 1,
            name: 'Timothee Catlamet',
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

    


    return (
        <div class="my-1 px-1 w-4/6 md:w-full lg:my-4 lg:px-4 lg:w-1/3 font-default font-nunito">
          <article class="overflow-hidden rounded-lg bg-white shadow-xl">
            <Slider/>
              <header class="flex items-left leading-tight p-2 md:p-4 ">
                  <h1 class="text-2xl font-bold">{Name}</h1>
              </header>
        <div>
        <div class="px-6 pt-2 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Breed}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Age} years</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Sex}</span>
        </div>
                </div>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
                    <div class="flex items-center no-underline  text-black" href="#">
                        
                        <button
                            href="#"
                            className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#826F66] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#826F66] border-2 border-solid hover:bg-gray-100
          "
                            type="button"
                            onClick={() => setshowDishInfo(true)}
                        >
                            Edit Information
                        </button>
                    </div>

                    {/* more info modal */}
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
                                            <h3 className="text-3xl font-semibold">Timothee Catlamet</h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setshowDishInfo(false)}
                                            >
                        <span
                            className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
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
                                                            {petData.map(({petId, name, age, breed, desc, req }) => ( 
                                                                <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter Your Shleter's Name"
                                                                onChange={(e) => onChangeInput(e, petId)}
                                                                value = {name + ', ' + breed + ', ' + age }
                                                                />

                                                            ))}
                                                          {/* Timothee Catlamet, Siamese-mix, 1 years old */}
                                                        </AccordionBody>
                                                    </Accordion>
                                                    {/* <Accordion open={open === 2}>
                                                        <AccordionHeader onClick={() => handleOpen(2)}>
                                                            Age
                                                        </AccordionHeader>
                                                        <AccordionBody >
                                                          2
                                                        </AccordionBody>
                                                    </Accordion> */}
                                                    {/* <Accordion open={open === 3}>
                                                        <AccordionHeader onClick={() => handleOpen(3)}>
                                                            My Purrsonality
                                                        </AccordionHeader>
                                                        <AccordionBody className="font-semibold">
                                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia atque quae magnam blanditiis maiores quod aspernatur assumenda quisquam ullam nostrum!
                                                        </AccordionBody>
                                                    </Accordion> */}
                                                    <Accordion open={open === 4}>
                                                        <AccordionHeader onClick={() => handleOpen(4)}>
                                                            My Purrsonality
                                                        </AccordionHeader>
                                                        <AccordionBody >
                                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia atque quae magnam blanditiis maiores quod aspernatur assumenda quisquam ullam nostrum!
                                                        </AccordionBody>
                                                    </Accordion>
                                                    <Accordion open={open === 5}>
                                                        <AccordionHeader onClick={() => handleOpen(5)}>
                                                        Medical Details
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente itaque deleniti autem, ducimus consequatur possimus explicabo id numquam voluptatem, architecto perspiciatis inventore laboriosam ipsa!
                                                        </AccordionBody>
                                                    </Accordion>
                                                    <Accordion open={open === 6}>
                                                        <AccordionHeader onClick={() => handleOpen(6)}>
                                                        Adopter Requirements
                                                        </AccordionHeader>
                                                        <AccordionBody>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente itaque deleniti autem, ducimus consequatur possimus explicabo id numquam voluptatem, architecto perspiciatis inventore laboriosam ipsa!
                                                        </AccordionBody>
                                                    </Accordion>
                                                    <h3 className="text-gray-700 text-m font-light mt-5 ">
                                                        note: whatsapp or call my shelter for more information about me!
                                                    </h3>

                                                   
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
                </footer>
            </article>
        </div>
    );
};

export default PetCard2;