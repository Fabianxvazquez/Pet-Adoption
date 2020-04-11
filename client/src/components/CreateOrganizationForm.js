import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';

const CreateOrganizationForm = (props) =>{
const [ organizationCreate , setOrganizationCreate ] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    console.log(organizationCreate)
    axios.post(`/api/organizations/`,organizationCreate).then(res => {
      setOrganizationCreate(res.data);
      props.history.goBack()
    }).catch( (err) => {
      console.log(err.response)
    })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setOrganizationCreate({
      ...organizationCreate,
      [name]: value,
    })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Name"
        required
        autoFocus
        name='name'
        value={organizationCreate.name}
        placeholder='Name'
        onChange={handleChange}
      />
      <Form.Input
        label="Phone"
        required
        name='contact_phone'
        value={organizationCreate.contact_phone}
        placeholder='Phone'
        onChange={handleChange}
      />
      <Form.Input
        label="Email"
        required
        type="email"
        name='contact_email'
        value={organizationCreate.contact_email}
        placeholder='Email'
        onChange={handleChange}
      />
       <Form.Input
        label="Zipcode"
        required
        name='zipcode'
        value={organizationCreate.zipcode}
        placeholder='Zipcode'
        onChange={handleChange}
      />
      <Button>Create Organization</Button>
    </Form>
   
  )
}

export default CreateOrganizationForm

