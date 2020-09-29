import React, { Component } from "react";

class InputForm extends Component {
    constructor(props) {
        super();

        this.submitItem = this.submitItem.bind(this);
    }

    render() {
        return (
            <div className="header">
                <form >
                    <input

                        placeholder="enter task" />
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }

    submitItem(event) {

    }
}

export default InputForm;
