import React, {Component} from 'react'

export default class Date extends Component {
    
    render() {
        
        return (
            <div>
                <p>{this.props.oneDate.date.toString()}</p>
            </div>
        )
    }
}