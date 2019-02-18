import React, {Component} from 'react'

export default class ItineraryNew extends Component {
    constructor () {
        super()
        this.state={
            name: '',
            description: '',
            startDate: '',
            endDate: ''
        }
    }

    itineraryChangeHandle = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    itineraryNewHandle = (event) => {
        event.preventDefault()
        //prop callback dispatch
    }

    render() {
        return (
            <div>
                <form onSubmit={this.itineraryNewHandle}>
                    <label>Itinerary Name</label>
                    <input type="text" name="name" onChange={this.itineraryChangeHandle} value={this.state.name}/>
                    <br/>
                    <label>Description</label>
                    <input type="text" name="description" onChange={this.itineraryChangeHandle} value={this.state.description}/>
                    <br/>
                    <br/>
                    <input type="submit" value="Add new Itinerary"/>
                </form>
            </div>
        )
    }
}