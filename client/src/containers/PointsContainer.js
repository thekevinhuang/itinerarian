import React, {Component} from 'react'
import { connect } from 'react-redux';
import Points from '../components/points/Points'
import PointNew from '../components/points/PointNew'
import PointShow from '../components/points/PointShow'
import {Route} from 'react-router-dom'

class PointsContainer extends Component {
    render() {

        return (
            <div>
                <Route path="/dates" render={(props)=> <div><PointNew date={this.props.date} addPoint={this.props.addPoint}/> <Points date={this.props.date} points={this.props.points} {...props}/></div>}/>
                
                <Route path="/points/:id" render={(props) => <PointShow points={this.props.points} {...props}/>}/>
                
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