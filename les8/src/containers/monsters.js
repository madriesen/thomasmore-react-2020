import { connect } from "react-redux";
import React, { Component } from "react";

import Monsters from "../components/monsters";

import store from "../store";

class MonsterContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO: aanvullen
  }

  render() {
    return <Monsters monsters={this.props.monsters} />;
  }
}

const mapStateToProps = (state) => {
  // mapStateToProps: mapping of the props with the state
  return {
    monsters: state.monsters,
  };
};

const mapDispatchToProps = (dispatch) => {
  // mapDispatchToProps: mapping of the eventhandlers with dispatch
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MonsterContainer);
