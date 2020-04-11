import React from 'react'
import { card } from "semantic-ui-react"
import axios from "axios"
import PetItems from './PetItems'
import styled from 'styled-components';
import ItemForm from '../forms/ItemForm';

export default class PetShowPage extends React.Component {
    state = { pet: '' }
    componentDidMount() {
        // const { pet_Id} = this.state.pet.id
        // const { organization_Id } = this.props
        axios.get(`/api/organizations/1/pets/1`).then(res => {
            this.setState({pet: res.data})
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        const { pet } = this.state
        return (
            <>
                <img src={pet.image}/>
                <p>{pet.breed}</p>
                <p>{pet.neutered}</p>
                <p>{pet.species}</p>
                <p>{pet.age}</p>
                <p>{pet.size}</p>
                <p>{pet.sex}</p>
                <PetItems pet_Id={pet.id} />
                <ItemForm pet_Id={pet.id}/>
            </>
        )
    }
}

const StyledCon = styled.div`

`
