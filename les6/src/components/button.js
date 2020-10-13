import React from 'react';
import PropTypes from 'prop-types';

const Button = ( { caption, onClick, onShiftClick } ) => {
    return (
        <button className="btn btn-default" onClick={(event) => {
                if (event.shiftKey) {
                    onShiftClick()
                } else {
                    onClick();
                }
            }}>
            {caption}
        </button>
    );
};

Number.propTypes = {
    display: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onShiftClick: PropTypes.func.isRequired
}

export default Button;