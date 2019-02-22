import React, {Component} from 'react'

const initialState = {
    name : '',
    description: ''
}

export default class PointNew extends Component {
    constructor() {
        super()
        this.state=initialState
    }

    //create handleChange and handleSubmit

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