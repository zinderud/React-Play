'use client'
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(c=>c + 1);
        setCount(count=>count + 1);
        setCount(count=>count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }


    return (
        <div className='counter-container'>
            <p className='counter-display'>{count}</p>
            <button className='counter-button' onClick={increment}>increment</button>
            <button className='counter-button' onClick={reset}> Reset </button> 
            <button className='counter-button' onClick={decrement}>decrement</button>
            
        </div>
    )
}

export default Counter