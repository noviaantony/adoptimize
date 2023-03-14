import React from 'react'
import { Carousel, Image } from 'antd';

const contentStyle = {
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CatProfile = () => {
  return (
    <>
      <div className="AppHeader bg-white">
        <div>
          <Image
            width={150}
            src={require("./Adoptimize.png")}
            alt="AdoptimizeLogo"
            className="mt-5"
          ></Image>
          <Image
            width={150}
            src={require("./Shelter.png")}
            alt="Logo"
            className="mt-5"
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <img
          style={contentStyle}
          src="https://images.unsplash.com/photo-1610973053414-abc5309f0a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ></img>
        <img
          style={contentStyle}
          src="https://images.unsplash.com/photo-1568470010257-111aa304d53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFnZG9sbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ></img>
        <img
          style={contentStyle}
          src="https://images.unsplash.com/photo-1620933288385-b2f6f1931d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        ></img>
        <img
          style={contentStyle}
          src="https://images.unsplash.com/photo-1610973053414-abc5309f0a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ></img>
        <img
          style={contentStyle}
          src="https://images.unsplash.com/photo-1568470010257-111aa304d53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFnZG9sbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ></img>
        <img
          style={contentStyle}
          src="https://images.unsplash.com/photo-1620933288385-b2f6f1931d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        ></img>
      </div>

      <div className="max-w-md overflow-hidden md:max-w-2xl mt-10 font-nunito ml-1 h-96">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide t text-indigo-500 font-semibold text-2xl">
              Breed: Siamese x Persian
            </div>
            <h2 className="mt-1 text-4xl leading-tight font-bold text-gray-900">
              Timothee Catlamet
            </h2>
            <p className="mt-2 text-gray-600 text-md">Age: 3 years old</p>
            <p className="mt-2 text-gray-600 text-md">
              Date of birth: March 14, 2019
            </p>
            <p className="mt-2 text-gray-600 text-md">
              Medical information: Up to date on all vaccines and in good health
            </p>
            <p className="mt-2 text-gray-600 text-md">
              Description: Up to date on all vaccines and in good health
            </p>
            <p className="mt-2 text-gray-600 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              excepturi exercitationem suscipit molestiae reprehenderit, aut
              soluta quo eum voluptatum provident ex assumenda, doloremque non
              facere, labore totam? Mollitia voluptate consequuntur non
              distinctio ut qui quidem cumque ex, nulla minus magnam, labore
              quaerat. Odit dolores quis reprehenderit tempora at hic
              cupiditate.
            </p>
            {/* <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Adopt Me
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CatProfile;