import React, {Component} from 'react'
import Dates from '../components/dates/Dates'
import { connect } from 'react-redux';
import {Route} from 'react-router-dom'
import DateShow from '../components/dates/DateShow'

class DatesContainer extends Component {
    
    render() {
        return(
            <div>
                <Route path="/itineraries" render={(routerProps) => <Dates itinerary={this.props.itinerary} dates={this.props.dates} {...routerProps}/>}/>
                <Route path="/dates/:dateId" render={(routerProps)=><DateShow dates={this.props.dates} {...routerProps}/>}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dates: state.dates
    }
}

export default connect(mapStateToProps)(DatesContainer)