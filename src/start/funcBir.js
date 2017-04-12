import React from 'react';
import {render} from 'react-dom';
  const isim = {  ad:"ali",  soyisim:"derdi" };
export class FuncBir extends React.Component  {
    constructor(props){ super(props); }

  Birlestir(isim){ return  isim.ad+" "+ isim.soyisim; }
render()
  {return <h1>Merhaba {this.Birlestir( isim)}</h1> ; 
 
}}

 render(< FuncBir/>,document.getElementById("app"))
