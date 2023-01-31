import React from 'react'
import Header from '../components/misc/Header'
import EditableTable from '../components/aboutus/EditableTable'
import EditableTable2 from '../components/aboutus/EditableTable2'

const AboutUs = () => {
  return (
    <div>
      <Header Title="About Us" Description = "input & edit your shelters decription here!"/>
      {/* <EditableTable/> */}
      <EditableTable2/>
    </div>
  )
}

export default AboutUs
