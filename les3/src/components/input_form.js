import React, { Component } from "react";

class InputForm extends Component {
  constructor(props) {
    super();

    this.submitItem = this.submitItem.bind(this);
  }

  render() {
    return (
      <div className="header">
        <form onSubmit={this.submitItem}>
          <input
            placeholder="enter task"
            ref={(a) => (this.inputElement = a)}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }

  submitItem(event) {
    this.props.onSubmitHandler(this.inputElement.value);
    this.inputElement.value = "";
    this.inputElement.focus();

    event.preventDefault();
  }
}

export default InputForm;
