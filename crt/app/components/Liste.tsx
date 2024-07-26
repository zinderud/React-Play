"use client"
import React, { useState } from 'react'

function Liste() {

  /*     const fruits=["apple","orange","banana"];
   
      const items=fruits.map(f => <li>{ f.toUpperCase()}</li>);
    return (
      <div>liste
  
        <ol>
          {items}
        </ol>
      </div>
    ) */

  const [foods, setFoods] = useState(["apple", "orange", "banana"]);
  function handleAddFood() {
    const newfood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(f => [...f, newfood]);

  }
  function handleRemoveFood(index:any) {
    setFoods(f => f.filter((_,i)=>i!==index));


  }

  return (<div>
    <h2>food list</h2>
    <ul>{foods.map((food, index)=>
    <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
    </ul>
    <input type="text" id="foodInput"  placeholder='enter food name'/>
    <button onClick={handleAddFood}>add food</button>
  </div>
  )
}

export default Liste