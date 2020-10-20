import React from "react";
import PropTypes from "prop-types";

// TODO: aanvullen
const Monster = ({ monster }) => {
  // TODO: aanvullen in de JSX-code
  return (
    <div className="post">
      <div className="alright">
        <img height={150} />
      </div>
      <h2 className="post_title"> </h2>
      <p className="post_message"> </p>
      <div className="control-buttons">
        <button className="edit">Edit</button>
        &nbsp;&nbsp;
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

Monster.propTypes = {
  // TODO: aanvullen
};

export default Monster;
