import React, {Component} from 'react'
import uuid from 'uuid'

const initialState = {
    name : '',
    description: ''
}

export default class PointNew extends Component {
    constructor() {
        super()
        this.state=initialState
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] :event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const id = uuid.v4()
        const point = {
            name: this.state.name,
            description: this.state.description,
            id: id,
            dateId: this.props.date.id
        }
        this.props.addPoint(point)
        this.setState(initialState)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Point Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/><br/>

                    <label>Point Description</label>
                    <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/><br/>

                    <input type="submit" value="Create a new Point!"/>
                </form>
            </div>
        )
    }
}