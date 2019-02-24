import React, {Component} from 'react'

export default class Point extends Component {
    render() {
        return (
            <div>
                {this.props.point.name}
            </div>
        )
    }
}