import React from 'react';
import { render } from 'react-dom';

export class Arttir extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sayac: 0 };
        this.arttir = this.arttir.bind(this);
    }
    arttir() {
        this.setState({
            sayac: this.state.sayac + 1
        });

    }
    render() {
        return <div>
            {this.state.sayac} <button onClick={this.arttir}>arrtır beni</button>
        </div>;
    }
}
render(<Arttir />, document.getElementById('app'));
