import React, {Fragment, useContext, useEffect, useState} from "react";
// import {Accordion, AccordionBody, AccordionHeader,} from "@material-tailwind/react";
// import Slider from './Slider'
import { Carousel, Collapse } from 'antd';
import { Link } from "react-router-dom";

const { Panel } = Collapse;

const contentStyle = {
  margin: 0,
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',  
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



const PetCard = ({Name, Breed, Sex, Age, Image1, Image2, Image3, Image4, Description, AdoptionFee, MedicalDetails}) => {

    const [showDishInfo, setshowDishInfo] = React.useState(false);

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const onCollapseChange = (key) => {
    console.log(key);
  };

    return (
      <>
        <div class="my-1 px-1 w-4/6 md:w-full lg:my-4 lg:px-4 lg:w-1/3 font-nunito">
          <article class="overflow-hidden rounded-lg bg-white shadow-xl">
            <Carousel afterChange={onChange}>
              <div>
                <div
                  style={contentStyle}
                  style={{
                    backgroundImage: `url(${Image2})`,
                    backgroundSize: "cover",
                    height: "200px",
                  }}
                ></div>
              </div>
              <div>
                <div
                  style={contentStyle}
                  style={{
                    backgroundImage: `url(${Image4})`,
                    backgroundSize: "cover",
                    height: "200px",
                  }}
                ></div>
              </div>
              <div>
                <div
                  style={contentStyle}
                  style={{
                    backgroundImage: `url(${Image3})`,
                    backgroundSize: "cover",
                    height: "200px",
                  }}
                ></div>
              </div>
              <div>
                <div
                  style={contentStyle}
                  style={{
                    backgroundImage: `url(${Image1})`,
                    backgroundSize: "cover",
                    height: "200px",
                  }}
                ></div>
              </div>
            </Carousel>
            <header class="flex items-left leading-tight p-2 md:p-4 ">
              <h1 class="text-2xl text-[#354458] font-bold">{Name}</h1>
            </header>
            <div>
              <div class="px-6 pt-2 pb-2 flex justify-start">
                <span class="bg-[#FDEDE1] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {Breed}
                </span>
                <span class="bg-[#FDEDE1] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {Age} years
                </span>
                <span class="bg-[#FDEDE1] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {Sex}
                </span>
              </div>
            </div>

            <footer class="flex items-center justify-between leading-none p-2 md:p-4 bg-white">
              <div
                class="flex items-center no-underline  text-[#354458]"
                href="#"
              >
                <Link
                  className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-[#F7AF7A] text-white rounded-md focus:outline-none transition duration-300 mr-3 font-semibold  hover:bg-[#FDEDE1] hover:text-[#354458]
    "
                  type="button"
                  to="/AdoptionForm"
                >
                  Request To Adopt
                </Link>
                <button
                  // to="/CatProfile"
                  className="inline-flex items-center py-1.5 px-3 text-xs font-xs text-center bg-white hover:text-[#F7AF7A] rounded-md focus:outline-none transition duration-300 mr-3 font-semibold text-[#354458]
    "
                  type="button"
                  onClick={() => setshowDishInfo(true)}
                >
                  View Information
                </button>
              </div>
            </footer>
          </article>
        </div>

        {/* more info modal */}
        {showDishInfo ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="text-center items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t mt-5">
                    <h3 className="text-3xl font-semibold">
                        About {Name}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setshowDishInfo(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-gray-700 text-lg leading-relaxed">
                      <Collapse
                        defaultActiveKey={["5"]}
                        onChange={onCollapseChange}
                      >
                        <Panel header="Name" key="1">
                          <p>{Name} </p>
                        </Panel>
                        <Panel header="Breed" key="2">
                          <p>{Breed} </p>
                        </Panel>
                        <Panel header="Age" key="3">
                          <p>{Age} </p>
                        </Panel>
                        <Panel header="Gender" key="4">
                          <p>{Sex} </p>
                        </Panel>
                        <Panel header="Description" key="5">
                          <p>
                              {Description}
                          </p>
                        </Panel>
                        <Panel header="Medical Details" key="6">
                          <p>

                              {MedicalDetails}


                          </p>
                        </Panel>

                        <Panel header="Adoption Fee" key="8">
                          <p>300 SGD</p>
                        </Panel>
                      </Collapse>
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setshowDishInfo(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
};

export default PetCard;