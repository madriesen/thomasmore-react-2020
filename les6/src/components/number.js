import React from 'react';
import PropTypes from 'prop-types';

const Number = ( { display } ) => {
    let textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
    };

    return (
        <div style={textStyle}>
            {display}
        </div>
    );
};

Number.propTypes = {
    display: PropTypes.string.isRequired
}

export default Number;
