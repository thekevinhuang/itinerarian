import React, {Component} from 'react'
import Dates from '../components/dates/Dates'
import { connect } from 'react-redux';

class DatesContainer extends Component {
    render() {
        return(
            <div>
                <Dates itinerary={this.props.itinerary} dates={this.props.dates}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dates: state.dates
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatesContainer)