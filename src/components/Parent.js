import React, { Component } from 'react';
import Child from './Child';
import Demo1 from './Demo1';

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h1> Hi I am a Parent Component </h1>
                <Child Title="I am text from Parent Component"></Child>
                <Demo1 Title="I am text from Functional Component"></Demo1>
            </div>
        )
    }  
}
