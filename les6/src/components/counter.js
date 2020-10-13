import React from 'react';
import PropTypes from 'prop-types';

import Number from './number';
import Button from './button';

const Counter = ({ display, onIncrement, onDecrement, setDecimal, setHexadecimal } ) => {
    const backgroundStyle = {
        padding: 50,
        backgroundColor: "#FFC53A",
        width: 300,
        height: 260,
        borderRadius: 10,
        textAlign: "center"
    };

    return (
        <div style={backgroundStyle}>
            <Number display={display}/>
            <Button caption="+" onClick={() => onIncrement(1)} onShiftClick={() => onIncrement(10)}/>
            &nbsp;
            <Button caption="-" onClick={() => onDecrement(1)} onShiftClick={() => onDecrement(10)}/>
            &nbsp;
            <Button caption="DEC" onClick={() => setDecimal()} onShiftClick={() => setDecimal()}/>
            &nbsp;
            <Button caption="HEX" onClick={() => setHexadecimal()} onShiftClick={() => setHexadecimal()}/>
        </div>
    );
};

Counter.propTypes = {
    display: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    setDecimal: PropTypes.func.isRequired,
    setHexadecimal: PropTypes.func.isRequired
};

export default Counter;
