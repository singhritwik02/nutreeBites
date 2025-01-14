import React, { useState } from 'react'
import styles from './Product.module.css'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Button from '../button/Button';
import img1 from '../../assets/img1.jpg'; 


function Product({product}) {
  
  const [isAddToWishList,  setIsAddToWishList] = useState(false)

  const {name , src, price,description}=product
  return (
    <div className={styles.container}>
        <img src={img1} className={styles.img} alt='img'/>
        <div className={styles.details}>
          <h1 className={styles.name}>name :- {name}</h1>
          <h2 className={styles.price}>price :- {price}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonGroup}>
            {!isAddToWishList &&<CiHeart onClick={()=>{}} className={styles.wishlist} />}
            {isAddToWishList && <FaHeart onClick={()=>{}} className={styles.wishlist}/>}
            <Button isCardBtn={true} onClick={()=>{}}>add to cart</Button>
            <Button isCardBtn={true}>Buy Now</Button>
          </div>
        </div>
    </div>
  )
}

export default Product