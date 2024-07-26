'use client'
import React,{useState}from 'react'

function ColorPicker() {
    const [color,SetColor]=useState("#fffff");
    function colorChanged(event:any) {
        SetColor(event.target.value);


    }
  return (
    <>
    <div className='colorPicker-Container' > ColorPicker
 
 
    

     <label  className='colorPicker-label'  style={{backgroundColor:color}}>Select color:{color}</label>
     <input type="color" value={color} onChange={colorChanged} className='colorPicker-input'></input>
     </div>
    </>
  )
}

export default ColorPicker