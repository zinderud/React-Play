"use client"
import React, { useState } from 'react'

function Car() {
    const [car,SetCar]=useState ({year:22,model:"mustang"})

    function handleYearChanged(event:any){
        SetCar(car=>({...car,year:event.target.value}));
    }
    function handleModelChanged(event:any){
        SetCar({...car,model:event.target.value});
    }

  return (
    <>
    <div>
        <p>Your favorite car is:{car.year} {car.model}</p>
        <input type="text" value={car.year}></input>
        <input type="text" value={car.model} />
        </div></>
      
  )
}

export default Car
 
