import React, { Component } from "react";

class ControlledComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "Some default value" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ text: event.target.value });
    // console.log(this.state.text);
  }

  componentDidUpdate(currentProps, currentState) {
    // console.log(this.state.text);
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.onInputChange} />
      </div>
    );
  }
}

export default ControlledComponent;
