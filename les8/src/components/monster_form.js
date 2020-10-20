import React, { Component } from "react";
import PropTypes from 'prop-types';

class MonsterForm extends Component {
    constructor(props) {
        super();

        this.state = { name: '', comment: ''};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeComment(event) {
        this.setState({comment: event.target.value});
    }

    render() {
        // TODO: aanvullen in de JSX-code
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Monster</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="item" type="text"       placeholder="Enter Name" />
                    <br />
                    <textarea required rows="5"        cols="28" placeholder="Enter Comment" /><br />
                    <button>Create</button>
                </form>
            </div>

        );
    }

    handleSubmit(event) {
        event.preventDefault();

        // TODO: aanvullen

    }
}

MonsterForm.propTypes = {
    // TODO: aanvullen

};

export default MonsterForm;
