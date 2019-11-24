import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    state = {
        counter: 0
    };
    render() {
        return <div data-test='component-app'></div>;
    }
}
