import React from 'react';

const Square = () => {
    var squareStyle = {
        height: 150,
        backgroundColor: props.color
    };

    return (
        <div style={squareStyle} />
    );
}

const Label = () => {
    var labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        padding: 13,
        margin: 0
    };

    return (
        <p style={labelStyle}>
            {props.color}
        </p>
    );
}

const Card = () => {
    var cardStyle = {
        height: 200,
        width: 150,
        padding: 0,
        backgroundColor: "#FFF",
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
        <div style={cardStyle}>
            <Square />
            <Label />
        </div>
    );
}

export default Card;
