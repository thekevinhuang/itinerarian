import React, {Component} from 'react'
import uuid from 'uuid'

const initialState = {
    name: '',
    description: '',
    startDate: '',
    endDate: ''
}

export default class ItineraryNew extends Component {
    constructor () {
        super()
        this.state=initialState
    }

    itineraryChangeHandle = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    itineraryNewHandle = (event) => {
        event.preventDefault()
        const id = uuid.v4()
        const itinerary = {
            name: this.state.name,
            description: this.state.description,
            id: id
        }
        this.props.addItinerary(itinerary)
        
        this.dateFiller(this.state.startDate, this.state.endDate,itinerary.id) 
        this.setState(initialState)
        //prop callback dispatch
    }

    dateFiller = (startDate, endDate, id) => {
        let currentDate = new Date(startDate)
        let newEndDate = new Date(endDate)
        while(currentDate<=newEndDate) {

            let newDate = new Date(currentDate)
            this.props.addDate({date: newDate, itineraryId : id})
            
            currentDate = newDate.setDate(newDate.getDate()+1)
        }
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