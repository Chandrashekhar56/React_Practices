import React, { Component } from 'react'

export default class MountingExample extends Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
        console.warn("Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.warn("getDerivedStateFromProps");
        return { favoritecolor: props.favcol };
    }

    componentDidMount() {
        console.warn("Component Mounted");
    }

    render() {
        console.warn("render");
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            </div>
        )
    }
}
