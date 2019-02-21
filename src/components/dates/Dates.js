import React, {Component} from 'react'
import Date from './Date'

export default class Dates extends Component {

    renderDates = () => {
        const dates = this.props.dates.filter(date => date.itineraryId === this.props.itinerary.id)
        
        return dates.map((element, index)=> <Date oneDate={element} />)
    }

    render(){
        return (
            <div>
                {this.renderDates()}
            </div>
        )
    }
}