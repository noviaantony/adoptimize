import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoptions from '../../screens/Adoptions'
import AllPets from '../../screens/AllPets'
import Prescreening from '../../screens/Prescreening';
import Contract from '../../screens/Contract';
import PetDetails from '../../screens/PetDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllPets />} />
      <Route path="/Adoptions" element={<Adoptions />} />
      <Route path="/PreScreeningQuestions" element={<Prescreening />} />
      <Route path="/AdoptionContract" element={<Contract />} />
      <Route path="/PetDetails" element={<PetDetails />} />
    </Routes>
  );
}

export default AppRoutes