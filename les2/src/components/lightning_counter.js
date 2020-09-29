import React, {Component} from 'react';

const Label = (props) => {
    var labelStyle = {
        color: "#66FFFF",
        fontSize: 50
    };
    return (
        <h1 style={labelStyle}>{props.number}</h1>
    );
}

class LightningCounter extends Component {
    constructor() {
        super();

        // state ALLEEN aanpassen in constructor
        this.state = { strikes: 0 };
        this.onTimerTick = this.onTimerTick.bind(this);
    }    

        
    componentDidMount() {
        setInterval(this.onTimerTick, 100);
    }

    render() {
        var divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        var textStyles = {
            emphasis: {
                fontSize: 38
            },
            small: {
                fontSize: 17,
                opacity: 0.5
            }
        };

        return (
            <div style={divStyle}>
                <Label number={this.state.strikes}/>
                <h2>LIGHTNING STRIKES</h2>
                <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
                <p style={textStyles.small}>(since you loaded this example)</p>
            </div>
        );
    }


    /**
     * Functions
     */


    onTimerTick() {
        this.setState({
            strikes: this.state.strikes + 1
        });
    }
}

export default LightningCounter;