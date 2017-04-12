import React from 'react'
import {render} from 'react-dom';




function Merhaba(props){
    return (<h1> selam {props.isim}</h1>);
}
export function App(){
    return (

        <div>
            <h2>sda</h2>
            <Merhaba isim = "ali" />
        </div>
    );
}

render(<App />,document.getElementById("app") );