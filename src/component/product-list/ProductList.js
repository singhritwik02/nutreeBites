import React,{useState} from 'react'
import Product from '../product/Product'
import styles from './ProductList.module.css'
import productsList from '../../data/product.json';

function ProductList() {
  const [productList] =useState(productsList)
  console.log(productList)
  return (
    <section id='products' className={styles.container}>
        <h1 className={styles.sectionHeading}>Produtcts</h1>
        <div className={styles.products}>
        {productList.map((product)=><Product name={product.name} price={product.price} src={product.img}
        description={product.description}/>)}
        </div>
    </section>
  )
}

export default ProductList