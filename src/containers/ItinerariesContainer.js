import React, {Component} from 'react'
import Itineraries from '../components/itineraries/Itineraries'
import ItineraryNew from '../components/itineraries/ItineraryNew'

class ItinerariesContainer extends Component {
    render () {
        return (
            <div>
                <ItineraryNew/>
                <Itineraries/>
            </div>
        )
    }
}

export default ItinerariesContainer