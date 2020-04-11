import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'


const Pets = (props) => {
  
  const [pets, setPets] = useState([])
  const { organization_id } = props
  
  useEffect(() => {
    axios.get(`/api/organizations/${organization_id}/pets`)
    .then(res => setPets( res.data ))
  }, []
  )

  const renderPets = () => { 
    return pets.map( pet => (
      <div key= {`pet-${pet.id}`}>
        {pet.image}
        <br />
        {pet.species}
        <br />
        {pet.breed}
        <br />
        <br />
      </div>
    ))
  }
  
  return (
    <>
    {renderPets()}
    </>
  )
}

export default Pets