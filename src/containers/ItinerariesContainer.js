import React, {Component} from 'react'
import Itineraries from '../components/itineraries/Itineraries'
import ItineraryNew from '../components/itineraries/ItineraryNew'
import {Route} from 'react-router-dom'
import ItineraryShow from '../components/itineraries/ItineraryShow';
import {connect} from 'react-redux'

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
                <Route exact path={`${this.props.match.url}`} render={(props)=> (<div><ItineraryNew/><Itineraries itineraries={itineraries} {...props}/></div>)}/>
                <Route path={`${this.props.match.url}/:itineraryId`} component={ItineraryShow}/>
                
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

}

export default connect(mapStateToProps,mapDispatchToProps)(ItinerariesContainer)