import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Point extends Component {
    render() {
        return (
            <div>
                <Link key={this.props.point.id} to={`/points/${this.props.point.id}`}>{this.props.point.name}</Link><br/>
            </div>
        )
    }
}