import React from 'react'
import Header from '../../components/common/misc/Header' 
import Table from '../../components/shelter/adoptionmanagement/Table'
import WaitListTable from "../../components/shelter/adoptionmanagement/WaitListTable";


const AdoptionManagement = () => {
  return (
    <div>
      <Header Title = "Adoption Management" Description = "keep track of all interested adopters and the status of their adoption requests here!"/>
      {/* <Table/> */}
      <WaitListTable/>

      
    </div>
  )
}

export default AdoptionManagement;
