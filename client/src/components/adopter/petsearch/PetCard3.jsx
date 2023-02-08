import React, {Fragment, useContext, useEffect, useState} from "react";
import {Accordion, AccordionBody, AccordionHeader,} from "@material-tailwind/react";

const PetCard3 =({name, type, breed, sex, age, description, medical, sheltername,
    sheltercontact, image}) => {
    const [showMore, setShowMore] = useState(false);
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
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
            sheltername: 'shelterrrr',
            sheltercontact: '+65 12345678',
            image: 'https://images.unsplash.com/photo-1511876849877-f8d0d953d2e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        } 
    ]
    return (
        <>
        <div class="my-1 px-1 w-4/6 md:w-full lg:my-4 lg:px-4 lg:w-1/3 font-default font-nunito"
            style={{ display: 'flex', flexWrap: 'wrap'}}>
            <article class="overflow-hidden rounded-lg bg-white shadow-xl">
            {petsData.map((data) => {
                return (
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                <div>
                <img class='md'src={data.image} />
              </div>
              <header class="flex items-left leading-tight p-2 md:p-4 ">
                  <h1 class="text-2xl font-bold">{data.name}</h1>
              </header>
              <div class="px-6 pt-2 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.type}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.breed}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.sex}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.age }years</span>
                <div class="flex items-center no-underline  text-black" href="#">
                    <button href="#" className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-gray-500 rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#826F66] border-2 border-solid hover:bg-gray-100
                        "type="button" onClick={() => setShowMore(true)}>
                        Show More Information
                    </button>
                </div>
              </div>
              {showMore && (
                 <div class="text-center items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t mt-5">
                <h3 class="text-3xl font-semibold">{data.name}</h3>
                <div className="relative p-6 flex-auto">
                    <p class="my-4 text-gray-700 text-lg leading-relaxed">{data.type}</p>
                    <p class="my-4 text-gray-700 text-lg leading-relaxed">{data.breed}</p>
                    <p class="my-4 text-gray-700 text-lg leading-relaxed">{data.sex}</p>
                    <p class="my-4 text-gray-700 text-lg leading-relaxed">{data.age} years</p>
                    <p class="my-4 text-gray-700 text-lg leading-relaxed">
                        <Fragment>

                            <Accordion open={open==1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                                Description:
                            </AccordionHeader>
                            <AccordionBody>{data.description}</AccordionBody>
                            </Accordion>
                            <Accordion open={open==2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                Medical Information:
                            </AccordionHeader>
                            <AccordionBody>{data.medical}</AccordionBody>
                            </Accordion>
                            <Accordion open={open==3}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                Adopter Requirements:
                            </AccordionHeader>
                            <AccordionBody>{data.requirements}</AccordionBody>
                            </Accordion>
                            <Accordion open={open==4}>
                            <AccordionHeader onClick={() => handleOpen(4)}>
                                Shelter Information:
                            </AccordionHeader>
                            <AccordionBody>Animal Shelter: {data.sheltername}, Shelter Contact: {data.sheltercontact}</AccordionBody>
                            </Accordion>
                            <p class="text-gray-700 text-m font-light mt-5 ">
                        note: whatsapp or call my shelter for more information about me!
                        </p>
                        </Fragment>
                        </p>
                </div>
                <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={() => setShowMore(false)}>Close</button>
                </div>
              )}
              </div>
              );
            })}
            </article>
        </div>
        </>
    );
};

export default PetCard3;