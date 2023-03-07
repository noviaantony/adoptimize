import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoptions from '../../screens/Adoptions'
import AllPets from '../../screens/AllPets'

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<AllPets />}/>
        <Route path="/Adoptions" element={<Adoptions />}/>
      </Routes>
  );
}

export default AppRoutes