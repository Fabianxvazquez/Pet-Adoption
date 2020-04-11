import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Image, Grid, Button } from 'semantic-ui-react'


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
      <Card key= {`pet-${pet.id}`}>
      <Image src={pet.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{pet.species}</Card.Header>
        <Card.Description>
        {pet.breed}
        </Card.Description>
        <Button icon="thumbs up" />
      </Card.Content>
    </Card>

    ))
  }
  
  return (
    <>
    {renderPets()}
    </>
  )
}

export default Pets