import React, {Component} from 'react'
import PointsContainer from '../../containers/PointsContainer'

const dateDisplay = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

export default class DateShow extends Component {

    render () {

        const date = this.props.dates.find(date => date.id === this.props.match.params.dateId)

        return (
            <div>
                <h2>{date.date.toLocaleDateString("en-US", dateDisplay)}</h2>
                <PointsContainer date={date}/>
            </div>
        )
    }
}