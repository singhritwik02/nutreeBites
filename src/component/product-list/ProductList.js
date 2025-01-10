import React,{useState,useContext} from 'react'
import Product from '../product/Product'
import styles from './ProductList.module.css'
import productsList from '../../data/product.json';
import { CartContext } from '../../App';

function ProductList() {
  const { addToCart, addToWishlist,cartProducts,productList } = useContext(CartContext);



  return (
    <section id='products' className={styles.container}>
        <h1 className={styles.sectionHeading}>Produtcts</h1>
        <div className={styles.products}>
        {productList.map((product, index)=><Product product={product}  id={index} addToCart={addToCart} addToWishlist={addToWishlist} cartProducts={cartProducts}/>)}
        </div>
    </section>
  )
}

export default ProductList