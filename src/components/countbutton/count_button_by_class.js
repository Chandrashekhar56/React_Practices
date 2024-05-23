import React, { Component } from 'react'

export class CountButton extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>count:{this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }

}

export default CountButton
