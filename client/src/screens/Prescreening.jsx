import React from 'react'
import Form from  '../components/prescreening/Form'
import Header from '../components/misc/Header'
import {motion} from "framer-motion";

const Prescreening = () => {
  return (

    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
    >
    
    <div>
      <Header Title = "Pre-Screening Questions" Description="customize and edit your pre-screening questions here"/>
      <Form  classname = "mt-20"/>
    </div>
    </motion.div>
  )
}

export default Prescreening
