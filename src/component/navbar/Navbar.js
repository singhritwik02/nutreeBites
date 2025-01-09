import React, {useState} from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'; // Relative path to the logo
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


function Navbar() {
    const [listMenu , setListMenu]=useState(false)

  return (

    <nav  className={styles.nav}>
        <img src={logo} alt= 'logo' className={styles.logo}></img>
        <div className={styles.content}>
        <ul className={styles.listItems}>
            <li className={styles.listItem}>
                <a href='#'>Home</a>
            </li>
            <li className={styles.listItem}>
                <a href='#products'>Products</a>
            </li>
            <li className={styles.listItem}>
                <a href='#about'>About</a>
            </li>   
        </ul>
        <div className={styles.icons}>
            <a href='#wishList'><CiHeart className={styles.wishlist}/></a>
            <a href='#cart'><FaShoppingCart  className={styles.cart}/></a>
        </div>
        <IoMenu className={styles.listIcon}/>

        </div>

    </nav>
  )
}

export default Navbar