import React from 'react';
import { render } from 'react-dom';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Merhaba Zaman </h1>
                <h2> şimdi {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

}

function Ucsaat(){
    return(
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    );
}

render(
    <Ucsaat />, document.getElementById("app")
);

