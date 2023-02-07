import React from 'react'
import Header from '../components/misc/Header' 
import PetsTable from '../components/adoptedpets/PetsTable'

const AdoptedPets = () => {
    return (
      <div>
        <Header Title = "My Pets" Description = "Keep track of pets you've adopted and pet adoption applications that are pending approval!"/>
        <PetsTable/>
        
      </div>
    )
  }

export default AdoptedPets;