import React, {useState} from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'; // Relative path to the logo
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";
import {Link} from 'react-router-dom';


function Navbar() {
    const [listMenu , setListMenu]=useState(true)

    const onListMenuIconClick =()=>setListMenu(true)
    const onCancelIconClick =()=>setListMenu(false)

  return (

    <nav  className={styles.nav}>
        <img src={logo} alt= 'logo' className={styles.logo}></img>
        <div className={styles.content}>
        <ul className={`${styles.listItems} ${listMenu && styles.showListItems}`}>
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
            <Link to='/wishList'><CiHeart className={styles.wishlist}/></Link>
            <Link to='/cart'><FaShoppingCart  className={styles.cart}/></Link>
        </div>
        {!listMenu && <IoMenu className={styles.listIcon} onClick={onListMenuIconClick}/>}
        {listMenu && <MdCancelPresentation className={styles.cancelIcon} onClick={onCancelIconClick}/>}

        </div>

    </nav>
  )
}

export default Navbar