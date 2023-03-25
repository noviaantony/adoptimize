import React, {Fragment, useState, useEffect} from 'react'
import Petcard from "../components/petlisting/Petcard";
import {motion} from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import { Carousel } from 'antd';
import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography, Dropdown } from "antd";
import { Avatar, Button } from "antd";
import "./../App.css";
import petService from "../services/PetService";

const PetListing = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    petService.getAllPets().then((res) => {
      console.log("Retrieving all pets...");
      console.log(res)
      setPets(res);
    });
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to ="/"
        >
          Logout
        </Link>
      ),
    },
  
  ];


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

      <div className="bg-[#F5F5F9] h-full">
        <Space direction="vertical table" className="bg-[#F5F5F9] h-full">
          <Typography.Title
            // level={10}
            className="font-nunito font-bold font-8xl mt-5 ml-10"
          >
            Wulf's Cat Shelter Adoption Listing
          </Typography.Title>

          {/* searchbar */}
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
                </div>
              </div>
            </form>
            {/* searchbar end */}
            <div className="mx-32">
              <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <motion.div class="container my- mx-auto px-4 md:px-12">
                      <div class="flex flex-wrap -mx-1 lg:-mx-4">
                        {pets
                          .filter((pet) => {
                            if (searchTerm == "") {
                              return pet;
                            } else if (
                              pet.name.toLowerCase().includes(
                                searchTerm.toLowerCase()
                              )
                            ) {
                              return pet;
                            }
                          })
                          .map((pet) => {
                            return (
                              <Petcard
                                Name={pet.name}
                                Age={pet.age}
                                Breed={pet.breed}
                                Sex={pet.sex}
                                Description = {pet.description}
                                AdoptionFee = {pet.petAdoptionFee}
                                MedicalDetails = {pet.medical}
                                Image1={pet.imageAddress}
                                Image2={pet.imageAddress}
                                Image3={pet.imageAddress}
                                Image4={pet.imageAddress}
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
        </Space>
      </div>
    </>
  );

};

export default PetListing;