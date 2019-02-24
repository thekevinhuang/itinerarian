import React, {Component} from 'react'
import Itineraries from '../components/itineraries/Itineraries'
import ItineraryNew from '../components/itineraries/ItineraryNew'
import {Route} from 'react-router-dom'
import ItineraryShow from '../components/itineraries/ItineraryShow';
import {connect} from 'react-redux'


class ItinerariesContainer extends Component {

    itineraryFind = (id) => {
        return this.props.itineraries.find(itinerary => itinerary.id===id)
    }

    render () {
        
        return (
            <div>
                <h1>Itineraries</h1>
                <Route exact path={`${this.props.match.url}`} render={(props)=> (<div><ItineraryNew addItinerary={this.props.addItinerary} addDate={this.props.addDate}/><Itineraries itineraries={this.props.itineraries} {...props}/></div>)}/>
                <Route path={`${this.props.match.url}/:itineraryId`} render={(props) => (<div><ItineraryShow itineraries={this.props.itineraries} {...props}/></div>)}/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itineraries : state.itineraries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItinerary : (itinerary) => dispatch({type: "ADD_ITINERARY", itinerary : itinerary}),
        addDate : (date) => dispatch({type: "ADD_DATE", date: date})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItinerariesContainer)