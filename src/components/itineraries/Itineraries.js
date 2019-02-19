import React, {Component} from 'react'
import Itinerary from './Itinerary'

export default class Itineraries extends Component {

    renderItineraries = () => {
        return this.props.itineraries.map((element, index)=> <Itinerary itinerary={element}/>)
    } 

    render () {
        return (
            <div>
                {this.renderItineraries()}
            </div>
        )
    }
}