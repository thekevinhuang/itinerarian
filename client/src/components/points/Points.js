import React, {Component} from 'react'
import Point from './Point'

export default class Points extends Component {

    renderPoints = () => {
        const points= this.props.points.filter(point=> point.dateId===this.props.date.id)

        return points.map((point, index)=> <Point point={point}/>)
    }

    render() {

        

        return (
            <div>
                {this.renderPoints()}
            </div>
        )
    }
}