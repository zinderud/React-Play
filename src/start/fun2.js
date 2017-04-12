import React from 'react';
import {render} from 'react-dom';



function Welcome(props) {
  return(
    <h1>Hello, {props.name}</h1>
 );
}

function Welcome2(props) {
  return(
    <h2>Hello, {props.name}</h2>
 );
}

export  function App() {
  return (
    <div>
      <Welcome2 name="as"  soy="s"/>
      <Welcome name="sad"  soy="s"/>
      <Welcome name="sead"  soy="s"/>
    </div>
  );
}

 render(
  <App />,
  document.getElementById('app')
);