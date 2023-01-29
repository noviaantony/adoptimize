import React from 'react'
import Header from '../components/misc/Header' 
import Table from '../components/adoptionmanagement/Table'

const AdoptionManagement = () => {
  return (
    <div>
      <Header Title = "Adoption Management" Description = "keep track of all interested adopters and the status of their adoption requests here!"/>
      <Table/>
      
    </div>
  )
}

export default AdoptionManagement;
