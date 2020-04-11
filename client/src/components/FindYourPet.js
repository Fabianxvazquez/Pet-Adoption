import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button } from 'semantic-ui-react'
import Pets from './Pets'
import { Link } from 'react-router-dom'


const FindYourPet = () => {

  const [organizations, setOrganizations] = useState([])
  
  useEffect(() => {
      axios.get('/api/organizations')
      .then(res => setOrganizations( res.data ))
    }, []
  )

  const renderOrganizations = () => { 
    return organizations.map( organization => (
      <div key= {`organization-${organization.id}`}>
        {organization.name}
        <br />
        {organization.contact_phone}
        <br />
        {organization.contact_email}
        <br />
        {organization.zipcode}
        <br />
        <Link to={{ pathname: `/organization/${organization.id}/edit`, organization: {...organization} }}>
          <Button>Edit</Button>
        </Link>
        <button> Delete organization </button>
        <br />
        <Pets organization_id={organization.id} />
      </div>
    ))
  }
  
  return (
    <>
    <h1> FIND YOUR PET </h1>
    <button> Create an organization </button>
    <button> Add a pet </button>
    <br />
    {renderOrganizations()}
    </>
  )
}

export default FindYourPet