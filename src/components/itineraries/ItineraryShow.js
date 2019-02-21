import React, {Component} from 'react'
import DatesContainer from '../../containers/DatesContainer'

export default class ItineraryShow extends Component {

    render() {

        const itinerary = this.props.itineraries.find(itinerary => itinerary.id === this.props.match.params.itineraryId)
        
        return(
            <div>
                <h1>{itinerary.name}</h1>
                <DatesContainer itinerary={itinerary}/>
            </div>
        )
    }
}