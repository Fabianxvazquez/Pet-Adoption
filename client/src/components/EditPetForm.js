import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';

const EditPetForm = (props) =>{
  const { organization_id, id} = props.match.params;
  const [ petsChange , setPetsChange ] = useState({...props.location.pet})
 
  console.log(petsChange)

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`/api/organizations/${organization_id}/pets/${id}`, petsChange).then(res => {
      // setPetsChange(res.data);
      props.history.goBack()
    }).catch( (err) => {
      console.log(err.response)
    })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setPetsChange({
      pet: {
        ...petsChange,
      [name]: value,
      }
    })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Breed"
        required
        autoFocus
        name='breed'
        value={petsChange.pet.breed}
        placeholder='breed'
        onChange={handleChange}
      />
      <Form.Input
        label="Neutered"
        required
        name='neutered'
        value={petsChange.pet.neutered}
        placeholder='Neutered'
        onChange={handleChange}
      />
      <Form.Input
        label="Species"
        required
        type="species"
        name='species'
        placeholder='species'
        value={petsChange.pet.species}
        onChange={handleChange}
      />
      <Form.Input
        label="Age"
        name="age"
        placeholder="age"
        value={petsChange.pet.age}
        onChange={handleChange}
        required
    />
    <Form.Input
        label="Image"
        name="image"
        placeholder="place url here"
        value={petsChange.pet.image}
        onChange={handleChange}
        required
    />
    <Form.Input
        label="Size"
        name="size"
        placeholder="size"
        value={petsChange.pet.size}
        onChange={handleChange}
        required
    />
    <Form.Input
        label="Sex"
        name="sex"
        placeholder="sex"
        value={petsChange.pet.sex}
        onChange={handleChange}
        required
    />
      <Button>Update</Button>
    </Form>
   
  )
}

export default EditPetForm