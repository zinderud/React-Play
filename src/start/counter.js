import React from 'react';
import {render} from 'react-dom';

export 
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};
        this.increment = this.increment.bind(this);
    }

    componentWillMount() {
        console.log('Counter about to mount!');
    }

    componentDidMount() {
        console.log('Counter has mounted!');
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return <div>
            {this.state.count} <button onClick={this.increment}>Increment Me</button>
        </div>;
    }
};



export function    Cift()
{
    return (
         <div>
               <Counter/>
               <Counter/>
         </div>
    );
}
 
 render(<Cift />, document.getElementById('app'));