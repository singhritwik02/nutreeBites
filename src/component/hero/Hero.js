import React from 'react'
import heroImg from '../../assets/hero-img.jpg'; // Relative path to the logo

import styles from './Hero.module.css'
import Button from '../button/Button'

function Hero() {
  return (
    <section id='home' className={styles.container}>
        <div className={styles.content}>
            <p className={styles.text}>
            "Life's too short for boring snacks. <span className={styles.company}><br></br>😜 Nutreebites</span> are here to make healthy snacking an adventure! Discover a world of delicious flavors and wholesome ingredients that will keep you coming back for more."
            </p>
            <Button>Explore Now</Button>
        </div>
        <div className={styles.backgroundDiv}>
           <img src={heroImg} className={styles.img}  alt='img'/> 
        </div>
    </section>
  )
}

export default Hero;