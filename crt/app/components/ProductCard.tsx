'use client'
import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css';
 

const ProductCard = () => {
  return (
    <div className={styles.cardContanier}>
        <AddToCart></AddToCart>
    <button className='btn btn-primary' onClick={() => console.log('fgfdgdfgdf')}> Add  Cart</button>  
    </div>
  )
}

export default ProductCard