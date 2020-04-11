import React from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
import PetItems from "./PetItems";
import styled from "styled-components";
import ItemForm from "../forms/ItemForm";
import { Link } from "react-router-dom"

export default class PetShowPage extends React.Component {
  state = { pet: "" };

  componentDidMount() {
    const { organization_id, id } = this.props.match.params;

    axios
      .get(`/api/organizations/${organization_id}/pets/${id}`)
      .then((res) => {
        this.setState({ pet: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deletePet = () => {
    const { organization_id, id } = this.props.match.params;

    axios
      .delete(`/api/organizations/${organization_id}/pets/${id}`)
      .then((res) => {
        this.props.history.goBack();
      })
      .catch((e) => console.log(e));
  };

  render() {
    const { pet } = this.state;
    const { organization_id, id } = this.props.match.params;
    return (
      <>
        <img src={pet.image} />
        <p>Breed: {pet.breed}</p>
        <p>Neutered: {pet.neutered}</p>
        <p>Species: {pet.species}</p>
        <p>Age: {pet.age}</p>
        <p>Size: {pet.size}</p>
        <p>Sex: {pet.sex}</p>
        <Link
          to={{
            pathname: `/organizations/${organization_id}/pets/${id}/edit`,
            pet: { ...this.state },
          }}
        >
          <Button basic color="blue">
            Edit
          </Button>
        </Link>
        <br />
        <Button onClick={() => this.deletePet()}> Delete Pet </Button>
        <br />
        <PetItems pet_Id={pet.id} />
        <ItemForm pet_Id={pet.id} />
      </>
    );
  }
}

const StyledCon = styled.div``;
