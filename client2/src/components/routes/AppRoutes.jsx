import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoptions from '../../screens/Adoptions'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Adoptions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes