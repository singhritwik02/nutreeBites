import React from 'react'
import styles from './WishlistItem.module.css'
import { FaHeart } from "react-icons/fa";
import Button from '../button/Button';
import img1 from '../../assets/img1.jpg'; 



function WishlistItem({product}) {

  const {name , src, price,description}=product

  return (
    <div className={styles.container}>
        <img src={img1} className={styles.img} alt='img'/>
        <div className={styles.details}>
          <h1 className={styles.name}>name :- {name}</h1>
          <h2 className={styles.price}>price :- {price}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonGroup}>
            <FaHeart onClick={()=>{}} className={styles.wishlist}/>
            <Button isCardBtn={true} onClick={onAddToCartClick}>add to cart</Button>
            <Button isCardBtn={true}>Buy Now</Button>
          </div>
        </div>
    </div>
  )
}

export default WishlistItem