import React from "react";
import { Form, Header } from "semantic-ui-react";
import axios from "axios";

class ItemForm extends React.Component {
  state = {  
  name: '',
  qty: '',
  category: '',
  pet_id: this.props.pet_Id };
    
  handleSubmit = e => {
    // console.log(this.state.pet_id)
    console.log(this.props)
    e.preventDefault();
    axios.post(`/api/pets/${this.props.pet_Id}/items`, this.state ).then(res => {
      this.setState({ name: '',
      qty: '',
      category: '',
      pet_id: this.props.pet_Id});
    }).catch( (err) => {
      console.log(err.response)
  })

  };
 
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ 
      ...this.state, 
      [name]: value });
  };

  render() {
    const { name, qty, category } = this.state;

    return (
      <div>
        <Header as="h1">New Item</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Quantity"
              name="qty"
              placeholder="qty"
              value={qty}
              onChange={this.handleChange}
              required
            />
              <Form.Input
              label="Category"
              name="category"
              placeholder="category"
              value={category}
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

export default ItemForm