import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from '../../components/common/landing/Hero';
import Features from '../../components/common/landing/Features';
import '../../index.css'
const Landing = () => {

  return (

    <div>
      <Hero/>
      <Features/>
    </div>

 

  )
}

export default Landing



   