import React, { useState } from 'react';
import { Badge, Drawer, Image, List, Space, Typography, Dropdown } from "antd";
import Personal from "../components/prescreening/Personal"

const  AdoptionForm = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [catKnowledge, setCatKnowledge] = useState('');
  const [householdSize, setHouseholdSize] = useState('');
  const [householdType, setHouseholdType] = useState('');
  const [residenceType, setResidenceType] = useState('');
  const [catExperience, setCatExperience] = useState('');
  const [catActivityLevel, setCatActivityLevel] = useState('');
  const [catBreedPreference, setCatBreedPreference] = useState('');
  const [catPersonalityPreference, setCatPersonalityPreference] = useState('');
  const [catLitterPreference, setCatLitterPreference] = useState('');
  const [catFoodPreference, setCatFoodPreference] = useState('');
  const [otherPets, setOtherPets] = useState('');
  const [vetInfo, setVetInfo] = useState('');
  const [petType, setPetType] = useState('');
  const [yard, setYard] = useState('');
  const [reason, setReason] = useState('');


  const handleSubmit = (event) => {
  event.preventDefault();
  console.log({
    name,
    age,
    email,
    phone,
    catKnowledge,
    householdSize,
    householdType,
    residenceType,
    catExperience,
    catActivityLevel,
    catBreedPreference,
    catPersonalityPreference,
    catLitterPreference,
    catFoodPreference,
    otherPets,
    vetInfo,
    });
    // Submit form data to backend here
  };

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

      <div className="bg-[#F5F5F9] h-96">
        <Space direction="vertical table">
          <Typography.Title
            // level={10}
            className="font-nunito font-bold font-8xl mt-5 ml-20"
          >
            Pet Adoption Form for BELLA
          </Typography.Title>
          <form className="p-4 mx-12 bg-blue font-nunito" onSubmit={handleSubmit}>
            <Personal/>
          </form>
        </Space>
      </div>


      


        





    </>
  );
};

export default AdoptionForm;
