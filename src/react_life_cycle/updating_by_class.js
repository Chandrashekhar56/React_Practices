import React, { Component } from 'react';

class UpdatingExample extends Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
        console.log("Constructor");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return false;
    }

    changeColor = () => {
        console.log("changeColor");
        this.setState({ favoritecolor: "blue" });
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button onClick={this.shouldComponentUpdate() ? this.changeColor : null}>Click me</button>
            </div>
        );
    }
}

export default UpdatingExample;
