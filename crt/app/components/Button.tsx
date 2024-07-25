'use client'
import styles from './ProductCard.module.css';
function Button() {
    let count=0
    const handlesClick = ( ) =>  {
        count++;
        window.alert(`ccxzcxzc =${count}` )
    } ;
    return (
        <>
       <div className={styles.cardContanier}>
      
    <button className='btn btn-primary' onClick={handlesClick}> dsadasdas</button>  
    </div>
         </>
    )
}

export default Button