import React, { useState } from 'react'
import styles from './Wishlist.module.css'
import WishlistItem from '../wishlist-item/WishlistItem'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import NotFound from '../not-found-page/NotFound';

function WishList() {
 const [wishlist] = useState([])
  
  return (
    <div className={styles.container}>
      {wishlist.length>0 &&<Link to='/'><IoArrowBack className={styles.btn}/></Link>}
      <div className={styles.products}>
        {wishlist.length==0 && <NotFound/>}
        {wishlist.length>0 && wishlist.map((product)=><WishlistItem product={product}/>)}
      </div>
    </div> 
  )
}

export default WishList