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
                    <label>Start Date</label>
                    <input type="date" name="startDate" onChange={this.itineraryChangeHandle} value={this.state.startDate}/>
                    <br/>
                    <label>End Date</label>
                    <input type="date" name="endDate" onChange={this.itineraryChangeHandle} value={this.state.endDate}/>
                    <br/>
                    <br/>
                    <input type="submit" value="Add new Itinerary"/>
                </form>
            </div>
        )
    }
}