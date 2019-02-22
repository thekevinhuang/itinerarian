import React, {Component} from 'react'

const dateDisplay = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

export default class DateShow extends Component {

    render () {

        const date = this.props.dates.find(date => date.id === this.props.match.params.dateId)

        return (
            <div>
                <p>{date.date.toLocaleDateString("en-US", dateDisplay)}</p>
            </div>
        )
    }
}