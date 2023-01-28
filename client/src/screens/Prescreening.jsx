import React from 'react'
import Form from  '../components/prescreening/Form'
import Header from '../components/misc/Header'

const Prescreening = () => {
  return (
    <div>
      <Header Title = "Pre-Screening Questions" Description="customize and edit your pre-screening questions here"/>
      <Form  classname = "mt-20"/>
    </div>
  )
}

export default Prescreening
