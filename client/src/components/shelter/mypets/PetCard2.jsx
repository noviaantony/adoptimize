import React, {Fragment, useContext, useEffect, useState} from "react";
import {Accordion, AccordionBody, AccordionHeader,} from "@material-tailwind/react";
// import Slider from './Slider'
import { Carousel } from 'antd';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

const contentStyle = {
  margin: 0,
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',  
};

const PetCard2 = ({Name, Breed, Sex, Age, Image1, Image2, Image3, Image4}) => {

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
        <div class="my-1 px-1 w-4/6 md:w-full lg:my-4 lg:px-4 lg:w-1/3 font-default font-nunito">
          <article class="overflow-hidden rounded-lg bg-white shadow-xl">
            <Carousel afterChange={onChange}>
                <div>
                    <div style={contentStyle} style = {{ backgroundImage:`url(${Image2})` ,   backgroundSize: 'cover', height: '200px'}} >

                    </div>
                </div>
                <div>
                    <div style={contentStyle} style = {{ backgroundImage:`url(${Image4})`,   backgroundSize: 'cover', height: '200px'}} ></div>
                </div>
                <div>
                    <div style={contentStyle} style = {{ backgroundImage:`url(${Image3})`,   backgroundSize: 'cover', height: '200px'}} ></div>
                </div>
                <div>
                    <div style={contentStyle} style = {{ backgroundImage:`url(${Image1})` ,   backgroundSize: 'cover', height: '200px'}} ></div>
                </div>
            </Carousel>
              <header class="flex items-left leading-tight p-2 md:p-4 ">
                  <h1 class="text-2xl font-bold">{Name}</h1>
              </header>
        <div>
        <div class="px-6 pt-2 pb-2 flex justify-start">
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Breed}</span>
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Age} years</span>
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Sex}</span>
        </div>
                </div>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
                    <div class="flex items-center no-underline  text-black" href="#">
                        
                        <button
                            href="#"
                            className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-gray-500 rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#826F66] border-2 border-solid hover:bg-gray-100
          "
                            type="button"
                            // onClick={() => setshowDishInfo(true)}
                        >
                            Edit Information
                        </button>
                        <button
                            href="#"
                            className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-red-600  rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-red-600 border-2 border-solid hover:bg-gray-100
          "
                            type="button"
                            // onClick={handleClickOpen}
                        >
                            Delete Pet
                        </button>

                        {/* confirmation modal */}
                        <Dialog
                            open={open2}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogContent>
                            <div class="p-3 text-center">
                                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 class="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400 font-nunito">Are you sure you want to delete {Name}?</h3>
                            </div>
                            </DialogContent>
                            <DialogActions class="p-3 text-center">
                            <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={handleClose}>
                                        Yes, I'm sure
                                    </button>
                                    <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={handleClose}>No, cancel</button>

                            </DialogActions>
                        </Dialog>

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