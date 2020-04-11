import React from 'react'
import { card } from "semantic-ui-react"
import axios from "axios"

export default class PetItems extends React.Component {
    state = { items: [] }
    componentDidMount() {
        // const { item_Id} = this.state.item.id
        // const { pet_Id} = this.props
        axios.get(`/api/pets/1/items`).then(res => {
            this.setState({ items: res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    renderItems = () => {

        const {items} = this.state
    
        return items.map(item => (
                <div key={`${item.id}`}>
                    <p>{item.name}</p>
                    <p>{item.qty}</p>
                    <p>{item.category}</p>
                </div>
        ))
        
    }
    render() {  
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}