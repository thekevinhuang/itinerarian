import React, {Component} from 'react'
import { connect } from 'react-redux';
import Points from '../components/points/Points'
import PointNew from '../components/points/PointNew'

class PointsContainer extends Component {
    render() {
        return (
            <div>
                <PointNew date={this.props.date} addPoint={this.props.addPoint}/>
                <Points date={this.props.date} points={this.props.points}/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        points : state.points
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPoint: (point) => dispatch({type: "ADD_POINT", point: point})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointsContainer)