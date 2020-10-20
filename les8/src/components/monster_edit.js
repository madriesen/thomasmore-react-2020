import React, { Component } from "react";
import PropTypes from 'prop-types';

class MonsterEdit extends Component {
    constructor(props) {
        super();

        // TODO: aanpassen
        this.state = { name: '', comment: '' };

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
        return (
            <div className="post">
                <div className="alright">
                    <img src={"./images/" + this.props.monster.image} height={150} />
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input id="item" type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="Enter Name" /><br />
                    <textarea required rows="5" value={this.state.comment} onChange={this.handleChangeComment} cols="28" placeholder="Enter Comment" />
                    <br />
                    <div className="control-buttons">
                        <button className="edit">Update</button>
                    </div>
                </form>
            </div>

        );
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO: aanvullen

    }
}

MonsterEdit.propTypes = {
    // TODO: aanvullen

};

export default MonsterEdit;
