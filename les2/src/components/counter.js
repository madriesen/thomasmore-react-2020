import React, {Component} from 'react';

const Number = (props) => {
    var textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
    };

    return (
        <div style={textStyle}>
            {props.display}
        </div>
    );
}


const Button = (props) => {
    return (
        <button onClick={(e) => props.onClickHandler(e, props.operator)}>
            {props.operator}
        </button>
    );
}


class Counter extends Component {
    constructor() {
        super();

        this.onButtonClick = this.onButtonClick.bind(this);

        this.state = { count: 0 };
    }

    render() {
        var backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <Number display={this.state.count}/>
                <Button operator="+" onClickHandler={this.onButtonClick}/>
                <Button operator="-" onClickHandler={this.onButtonClick}/>
            </div>
        );
    }


    /**
     * Functions
     */
    onButtonClick(event, operator) {
        var currentCount = this.state.count;
        var amount = (event.shiftKey) ? 10 : 1;

        if (operator === "+")
            currentCount += amount;
        else
            currentCount -= amount;
    
        this.setState({
            count: currentCount
        });
    }
}

export default Counter;