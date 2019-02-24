import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const dateDisplay = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

export default class Date extends Component {
    
    render() {
        
        return (
            <React.Fragment>
                <Link key={this.props.oneDate.id} to={`/dates/${this.props.oneDate.id}`}>{this.props.oneDate.date.toLocaleDateString("en-US", dateDisplay)}</Link><br/>
            </React.Fragment>
        )
    }
}