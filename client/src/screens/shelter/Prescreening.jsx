import React from 'react'
import Form2 from "../../components/shelter/prescreening/Form2";
import Form from  '../../components/shelter/prescreening/Form'
import Header from '../../components/common/misc/Header'

import {motion} from "framer-motion";

const Prescreening = () => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <div>
        <Header
          Title="Pre-Screening Questions"
          Description="Add, delete and edit questions for your pre-screening form. Add the question and provide the expected response so that we n auto-evaluate the adopters. If there is no specific expected response, put 'NONE' in the expected response field."
        />
        <Form classname="mt-20" />
        {/* <Form2 classname="mt-20" /> */}
      </div>
    </motion.div>
  );
}

export default Prescreening
