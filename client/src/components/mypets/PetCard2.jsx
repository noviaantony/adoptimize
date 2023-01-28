import React, {Fragment, useContext, useEffect, useState} from "react";
import {Accordion, AccordionBody, AccordionHeader,} from "@material-tailwind/react";
import Slider from './Slider'

const PetCard2 = ({Name, Breed, Sex, Age}) => {

    const [open, setOpen] = useState(1);
    const [showDishInfo, setshowDishInfo] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

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
                            className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-[#562349] text-white rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#562349] border-2 border-solid hover:bg-gray-700 hover:border-gray-700
          "
                            type="button"
                            onClick={() => setshowDishInfo(true)}
                        >
                            View Information
                        </button>
                        <button
                            href="#"
                            className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white text-[#562349] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold border-[#562349] border-2 border-solid hover:bg-gray-100
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
                                            <h3 className="text-3xl font-semibold">About Timothee</h3>
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
                                            <p className="my-4 text-gray-700 text-lg font-bold leading-relaxed">
                                                <Fragment>
                                                    <Accordion open={open === 1}>
                                                        <AccordionHeader onClick={() => handleOpen(1)}>
                                                            Description
                                                        </AccordionHeader>
                                                        <AccordionBody className="font-semibold">
                                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia atque quae magnam blanditiis maiores quod aspernatur assumenda quisquam ullam nostrum!
                                                        </AccordionBody>
                                                    </Accordion>
                                                    <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                              Medical Details
                            </AccordionHeader>
                            <AccordionBody>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente itaque deleniti autem, ducimus consequatur possimus explicabo id numquam voluptatem, architecto perspiciatis inventore laboriosam ipsa!
                            </AccordionBody>
                          </Accordion>
                                                    <h3 className="text-gray-700 text-m font-light mt-5 ">
                                                        Note: All data is based off the average quantity of
                                                        ingredients used for one serving of the dish
                                                    </h3>
                                                    {/* <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                              What is the carbon emission breakdown per
                              ingredient?
                            </AccordionHeader>
                            <AccordionBody>
                              * we will add this in later *
                            </AccordionBody>
                          </Accordion> */}
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
                                                // onClick={() => setshowDishInfo(false)}
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