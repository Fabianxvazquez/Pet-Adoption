import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';

const EditOrganizationForm = (props) =>{
  const { organizations } = props.history.location
  const [ organizationsChange , setOrganizationsChange ] = useState({organizations})
  const { organization_id} = props.match.params.organization_id;
  console.log(props)
  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`/api/organizations/${organization_id}`, organizationsChange).then(res => {
      setOrganizationsChange(res.data);
      props.history.goBack()
    }).catch( (err) => {
      console.log(err.response)
    })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setOrganizationsChange({
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
        value={organizationsChange.name}
        placeholder='Name'
        onChange={handleChange}
      />
      <Form.Input
        label="Phone"
        required
        name='contact_phone'
        value={organizationsChange.contact_phone}
        placeholder='Phone'
        onChange={handleChange}
      />
      <Form.Input
        label="Email"
        required
        type="email"
        name='contact_email'
        value={organizationsChange.contact_email}
        placeholder='Email'
        onChange={handleChange}
      />
       <Form.Input
        label="Zipcode"
        required
        name='zipcode'
        value={organizationsChange.zipcode}
        placeholder='Zipcode'
        onChange={handleChange}
      />
      <Button>Update</Button>
    </Form>
   
  )
}

export default EditOrganizationForm

