import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoptions from '../../screens/Adoptions'
import AllPets from '../../screens/AllPets'
import AllPetsAlt from '../../screens/AllPetsAlt'
import Prescreening from '../../screens/Prescreening';
import Contract from '../../screens/Contract';
import Contract2 from "../../screens/Contract2";
import PetDetails from '../../screens/PetDetails';
import AdoptionDetail from '../../screens/AdoptionDetail';
import Settings from '../../screens/Settings';
import Landing from "../../screens/Landing";


const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<AllPets />} />
      <Route path="/AllPetsAlt" element={<AllPetsAlt />} />
      <Route path="/Adoptions" element={<Adoptions />} />
      <Route path="/PreScreeningQuestions" element={<Prescreening />} />
      <Route path="/AdoptionContract" element={<Contract2 />} />
      <Route path="/PetDetails" element={<PetDetails />} />
      <Route path="/AdoptionDetails" element={<AdoptionDetail />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes