import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.submit}>
                <input type="text" name="city" placeholder="City" value={this.props.city} style={this.props.style} onChange={this.props.change}/>
                <input type="text" name="country" placeholder="Country" value={this.props.country} style={this.props.style} onChange={this.props.change}/>
                <button type="submit">Get Weather</button>
            </form>
        )
    }
}

export default Form