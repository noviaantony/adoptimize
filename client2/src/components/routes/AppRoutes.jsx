import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoptions from '../../screens/Adoptions'
import AllPets from '../../screens/AllPets'
import Prescreening from '../../screens/Prescreening';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllPets />} />
      <Route path="/Adoptions" element={<Adoptions />} />
      <Route path="/PreScreeningQuestions" element={<Prescreening />} />
    </Routes>
  );
}

export default AppRoutes