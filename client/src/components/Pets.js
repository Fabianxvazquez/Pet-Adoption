import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Image, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


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
      <Link to={{ pathname: `/organizations/${organization_id}/pets/${pet.id}` }}>
        <Image style={{cursor: 'pointer'}} src={pet.image} wrapped ui={false} />
      </Link>
      <Card.Content>
        <Card.Header>{pet.species}</Card.Header>
        <Card.Description>
        {pet.breed}
        </Card.Description>
        <Button icon="heart" />
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