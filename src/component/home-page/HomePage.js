import React from 'react'
import Hero from '../hero/Hero'
import Caption from '../middle-box/Caption'
import ProductList from '../product-list/ProductList'
import Navbar from '../navbar/Navbar'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Caption/>
        <ProductList/>
    </div>
  )
}

export default HomePage