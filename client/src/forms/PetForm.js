import React from "react";
import { Form, Header } from "semantic-ui-react";
import axios from "axios";

class PetForm extends React.Component {
    state = {
        breed: "",
        neutered: "",
        species: "",
        age: "",
        image: "",
        size: "",
        sex: "",
        organization_id: this.props.location.organization_id
    };

    handleSubmit = e => {
        const { organization_id} = this.state
        e.preventDefault();
        axios.post(`/api/organizations/${ organization_id }/pets`, this.state).then(res => {
        
            this.props.history.goBack()
        }).catch((err) => {
            console.log(err)
        })
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ 
          ...this.state, 
          [name]: value });
      };

    render() {
        const { breed, neutered, species, age, image, size, sex } = this.state;

        return (
            <div>
                <Header as="h1">New Pet</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input
                            label="Breed"
                            name="breed"
                            placeholder="breed"
                            value={breed}
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <Form.Input
                            label="Neutered"
                            name="neutered"
                            placeholder="neutered"
                            value={neutered}
                            onChange={this.handleChange}
                            required
                        />

                        <Form.Input
                            label="Species"
                            name="species"
                            placeholder="species"
                            value={species}
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            label="Age"
                            name="age"
                            placeholder="age"
                            value={age}
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            label="Image"
                            name="image"
                            placeholder="place url here"
                            value={image}
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            label="Size"
                            name="size"
                            placeholder="size"
                            value={size}
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            label="Sex"
                            name="sex"
                            placeholder="sex"
                            value={sex}
                            onChange={this.handleChange}
                            required
                        />

                    </Form.Group>
                    <Form.Button color="blue">Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

export default PetForm