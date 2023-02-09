import React, {Fragment, useState, useEffect}  from 'react'
import PetCard3 from '../../components/adopter/AllPets/PetCard3'
import Header from "../../components/common/misc/Header";
import {motion} from "framer-motion";
import { IoAdd } from "react-icons/io5";

import {Accordion, AccordionBody, AccordionHeader,} from "@material-tailwind/react";
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


const AllPets = () => {


const [searchTerm, setSearchTerm] = useState("");
  const [openTab, setOpenTab] = React.useState(1);

  const petList = [
    {
      Name: 'Timothee Catlamet',
      Breed: 'Ragdoll',
      Sex: 'Male',
      Age: 1,
      Availability: 'Waitlist',
      Personality: 'I was rescued from yishun with my sister! I enjoy eating tuna and wet food, and I love belly rubs. I hate being carried when I want to sleep :< I will bite if I dont wanna be touched. I am shy to strangers, but I love my humans.',
      Medical: 'Full Vacinated, Sterilised, De-flead, FIV Negative, Microchipped, De-wormed. Slight PICA',
      Requirements: 'I require lots of love and attention, hence adopters will be required to play with him everyday.I do try to eat foreign objects and will require extra attention. I also only eats wet food and will need that too. To ensure the safety of all cats, interested adopters must FULLY mesh their windows as most cats would be tempted to go to the ledge. This is extremely important to ensure that our cats will not be injured.',
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
      Availability: 'Waitlist',
      Personality: 'I was rescued from yishun with my sister! I enjoy eating tuna and wet food, and I love belly rubs. I hate being carried when I want to sleep :< I will bite if I dont wanna be touched. I am shy to strangers, but I love my humans.',
      Medical: 'Full Vacinated, Sterilised, De-flead, FIV Negative, Microchipped, De-wormed. Slight PICA',
      Requirements: 'I require lots of love and attention, hence adopters will be required to play with him everyday.I do try to eat foreign objects and will require extra attention. I also only eats wet food and will need that too. To ensure the safety of all cats, interested adopters must FULLY mesh their windows as most cats would be tempted to go to the ledge. This is extremely important to ensure that our cats will not be injured.',
      Availability: 'Waitlist',
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
      Availability: 'Waitlist',
      Personality: 'I was rescued from yishun with my sister! I enjoy eating tuna and wet food, and I love belly rubs. I hate being carried when I want to sleep :< I will bite if I dont wanna be touched. I am shy to strangers, but I love my humans.',
      Medical: 'Full Vacinated, Sterilised, De-flead, FIV Negative, Microchipped, De-wormed. Slight PICA',
      Requirements: 'I require lots of love and attention, hence adopters will be required to play with him everyday.I do try to eat foreign objects and will require extra attention. I also only eats wet food and will need that too. To ensure the safety of all cats, interested adopters must FULLY mesh their windows as most cats would be tempted to go to the ledge. This is extremely important to ensure that our cats will not be injured.',
      Availability: 'Waitlist',
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
      Availability: 'Waitlist',
      Personality: 'I was rescued from yishun with my sister! I enjoy eating tuna and wet food, and I love belly rubs. I hate being carried when I want to sleep :< I will bite if I dont wanna be touched. I am shy to strangers, but I love my humans.',
      Medical: 'Full Vacinated, Sterilised, De-flead, FIV Negative, Microchipped, De-wormed. Slight PICA',
      Requirements: 'I require lots of love and attention, hence adopters will be required to play with him everyday.I do try to eat foreign objects and will require extra attention. I also only eats wet food and will need that too. To ensure the safety of all cats, interested adopters must FULLY mesh their windows as most cats would be tempted to go to the ledge. This is extremely important to ensure that our cats will not be injured.',
      Availability: 'Available',
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
      Availability: 'Waitlist',
      Personality: 'I was rescued from yishun with my sister! I enjoy eating tuna and wet food, and I love belly rubs. I hate being carried when I want to sleep :< I will bite if I dont wanna be touched. I am shy to strangers, but I love my humans.',
      Medical: 'Full Vacinated, Sterilised, De-flead, FIV Negative, Microchipped, De-wormed. Slight PICA',
      Requirements: 'I require lots of love and attention, hence adopters will be required to play with him everyday.I do try to eat foreign objects and will require extra attention. I also only eats wet food and will need that too. To ensure the safety of all cats, interested adopters must FULLY mesh their windows as most cats would be tempted to go to the ledge. This is extremely important to ensure that our cats will not be injured.',
      Availability: 'Waitlist',
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
      Availability: 'Waitlist',
      Personality: 'I was rescued from yishun with my sister! I enjoy eating tuna and wet food, and I love belly rubs. I hate being carried when I want to sleep :< I will bite if I dont wanna be touched. I am shy to strangers, but I love my humans.',
      Medical: 'Full Vacinated, Sterilised, De-flead, FIV Negative, Microchipped, De-wormed. Slight PICA',
      Requirements: 'I require lots of love and attention, hence adopters will be required to play with him everyday.I do try to eat foreign objects and will require extra attention. I also only eats wet food and will need that too. To ensure the safety of all cats, interested adopters must FULLY mesh their windows as most cats would be tempted to go to the ledge. This is extremely important to ensure that our cats will not be injured.',
      Availability: 'Available',
      Image1:'https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image2: 'https://images.unsplash.com/photo-1602779717445-b15fa367c13d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1haW5lJTIwY29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image3: 'https://images.unsplash.com/photo-1568470010257-111aa304d53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      Image4: 'https://images.unsplash.com/photo-1586417752912-b0389b445a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

    const [open, setOpen] = useState(1);

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
                Title="Pet Gallery"
                Description="browse all cats & dogs from our partnering shelters and apply your interest here"
            />

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
                placeholder="Search for your favourite pet by name"
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
                <option value="1">Cross-Breed</option>
                <option value="0">Poodle</option>
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
                            <PetCard3
                              Name={pet.Name}
                              Age={pet.Age}
                              Breed={pet.Breed}
                              Sex={pet.Sex}
                              Image1={pet.Image1}
                              Image2={pet.Image2}
                              Image3={pet.Image3}
                              Image4={pet.Image4}
                              Personality = {pet.Personality}
                              Medical = {pet.Medical}
                              Requirement = {pet.Requirements}
                              Availability = {pet.Availability}
                            />
                          );
                        })}
                    </div>
                  </motion.div>

        </div>
        </div>
        </div>
        </div>


            
        </>
    )
}

export default AllPets
