import React, {Component} from 'react'
import Itineraries from '../components/itineraries/Itineraries'
import ItineraryNew from '../components/itineraries/ItineraryNew'

let itineraries = [
    {
        id: '293',
        name: 'hello',
        description: 'hola'
    },
    {
        id: '2019',
        name: 'wow',
        description: 'wee'
    }
]

class ItinerariesContainer extends Component {
    render () {
        
        return (
            <div>
                <h1>Itineraries</h1>
                <ItineraryNew/>
                <Itineraries itineraries={itineraries}/>
                
                 
            </div>
        )
    }
}

export default ItinerariesContainer