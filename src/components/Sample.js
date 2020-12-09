import React, { Component } from 'react'

export default class Sample extends Component {
    state = {
        a: 'Hello'
    };

    handleButtonClick = () => {
        console.log("inside button click");
        // this.state.a = "you pressed button";
        this.setState({
            a:"You Pressed Button"
        });
    };
    render() {
        return (
            <div>
                <h1>{this.state.a}</h1>
                <button type="button" onClick={this.handleButtonClick}>Click Me</button>
            </div>
        );
    }
}
