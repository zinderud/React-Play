

import React from 'react';
import {render} from 'react-dom';

export class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggleOn:true}
        this.Tikla=this.Tikla.bind(this);
    }
    Tikla(){
        this.setState(durum=>({
            isToggleOn:!durum.isToggleOn
        }));
    }
    render(){
        return(
            <button onClick={this.Tikla}>
                {this.state.isToggleOn ? "ON":"OFF"}
            </button>
        )
    }
}
render(<ToggleButton/>,document.getElementById("app"))