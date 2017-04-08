import React from 'react';
import {render} from 'react-dom';

const element=(
    <div>
        <h2> Merhaba</h2>
        <h3>zaman şimdi {new Date().toLocaleDateString()} </h3>
    </div>
);
 export function tiktak(){
 render(element,document.getElementById("app1"));
}



   setInterval(tiktak,1000);
