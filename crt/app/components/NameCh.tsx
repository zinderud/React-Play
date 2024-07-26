'use client'
import React,{useState} from 'react'

function NameCh() {
const [name,SetName]=useState("");
const [payment,SetPayment]=useState("");

function handleNameChange(event:any) {
    SetName(event.target.value);
}

function handlePaymentChange(event:any) {
    SetPayment(event.target.value);
}



  return (
    <>
    <div className='name-Change'>
        <p  >Name Change</p>
        <input value={name} onChange={handleNameChange}></input>
        <p>name:{name}</p>

    </div>
    <div className='name-Change'>
        <p  >payment Change</p>
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Selecet option</option>
            <option value="visa"></option>
            <option value="mastercard"></option>
        </select>
        <p>name:{payment}</p>

    </div>
    </>
  )
}

export default NameCh